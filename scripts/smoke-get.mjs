import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { HelpdeskClient } = require("../dist/src/index.js");

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function getEnvTrimmed(name) {
  const value = process.env[name];
  return value ? value.trim() : "";
}

function resolveAuthConfig(baseUrl) {
  const token = getEnvTrimmed("HDE_TOKEN");
  const email = getEnvTrimmed("HDE_EMAIL");
  const apiKey = getEnvTrimmed("HDE_API_KEY");

  const hasToken = token.length > 0;
  const hasEmailOrApiKey = email.length > 0 || apiKey.length > 0;

  if (hasToken && hasEmailOrApiKey) {
    throw new Error(
      "Ambiguous auth config: set either HDE_TOKEN or HDE_EMAIL+HDE_API_KEY, not both.",
    );
  }

  if (hasToken) {
    return { mode: "token", config: { baseUrl, token } };
  }

  if (!email || !apiKey) {
    throw new Error(
      "Missing auth config: set HDE_TOKEN or both HDE_EMAIL and HDE_API_KEY.",
    );
  }

  return { mode: "basic", config: { baseUrl, email, apiKey } };
}

async function run(name, fn) {
  try {
    const result = await fn();
    const data = result?.data;
    const size = Array.isArray(data)
      ? data.length
      : data && typeof data === "object"
        ? Object.keys(data).length
        : 0;
    console.log(`OK   ${name} (items: ${size})`);
    return { ok: true, name };
  } catch (error) {
    const message = error?.response?.data ?? error?.message ?? String(error);
    console.error(`FAIL ${name}`);
    console.error(message);
    return { ok: false, name };
  }
}

async function main() {
  const baseUrl = required("HDE_BASE_URL");
  const { mode, config } = resolveAuthConfig(baseUrl);
  console.log(`Auth mode: ${mode}`);

  const client = new HelpdeskClient(config);

  const ticketId = Number(process.env.HDE_TICKET_ID || 0);
  const userId = Number(process.env.HDE_USER_ID || 0);
  const organizationId = Number(process.env.HDE_ORGANIZATION_ID || 0);

  const checks = [
    ["departments.getAll", () => client.departments.getAll()],
    ["dictionaries.getStatuses", () => client.dictionaries.getStatuses()],
    ["dictionaries.getPriorities", () => client.dictionaries.getPriorities()],
    [
      "tickets.getAll",
      () => client.tickets.getAll({ page: 1, status_id: "open" }),
    ],
    ["users.getAll", () => client.users.getAll({ page: 1 })],
    [
      "knowledgeBase.getArticles",
      () => client.knowledgeBase.getArticles({ page: 1 }),
    ],
  ];

  if (ticketId > 0) {
    checks.push(["tickets.getById", () => client.tickets.getById(ticketId)]);
    checks.push([
      "tickets.getPosts(number)",
      () => client.tickets.getPosts(ticketId, 1),
    ]);
    checks.push([
      "tickets.getPosts(query)",
      () => client.tickets.getPosts(ticketId, { page: 1 }),
    ]);
    checks.push([
      "tickets.getComments",
      () => client.tickets.getComments(ticketId),
    ]);
    checks.push([
      "tickets.getBilling",
      () => client.tickets.getBilling(ticketId),
    ]);
  }

  if (userId > 0) {
    checks.push(["users.getById", () => client.users.getById(userId)]);
    checks.push([
      "users.getNotes",
      () => client.users.getNotes(userId, { page: 1 }),
    ]);
  }

  if (organizationId > 0) {
    checks.push([
      "organizations.getById",
      () => client.organizations.getById(organizationId),
    ]);
    checks.push([
      "organizations.getNotes",
      () => client.organizations.getNotes(organizationId, { page: 1 }),
    ]);
  }

  const results = [];
  for (const [name, fn] of checks) {
    results.push(await run(name, fn));
  }

  const failed = results.filter((x) => !x.ok);
  console.log("\nSummary:");
  console.log(`Passed: ${results.length - failed.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
