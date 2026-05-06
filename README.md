# helpdeskeddy-sdk

TypeScript SDK for HelpDeskEddy API v2.

## Install

```bash
npm i git+https://github.com/you/helpdeskeddy-sdk.git
```

## Quick Start

```ts
import { HelpdeskEddyClient } from "@kodokutsurai/helpdeskeddy-sdk";

const client = new HelpdeskEddyClient({
  baseUrl: "https://your-domain.helpdeskeddy.com",
  email: "you@example.com",
  apiKey: "your-api-key",
});

const departments = await client.departments.getAll();
console.log(departments.data);
```

## Auth

You can use one of two auth modes:

1. Basic auth with `email + apiKey`
2. Bearer auth with `token`

```ts
// Basic
const clientBasic = new HelpdeskEddyClient({
  baseUrl: "https://your-domain.helpdeskeddy.com",
  email: "you@example.com",
  apiKey: "your-api-key",
});

// Bearer token
const clientToken = new HelpdeskEddyClient({
  baseUrl: "https://your-domain.helpdeskeddy.com",
  token: "your-token",
});
```

## Common Examples

### Tickets

```ts
// List with typed query params
const tickets = await client.tickets.getAll({
  page: 1,
  status_id: "open",
  search: "printer",
});

// Get ticket by id
const ticket = await client.tickets.getById(123);

// Create ticket
const created = await client.tickets.create({
  title: "Forgotten cat issue",
  description: "User can`t find his cat",
  user_email: "user@example.com",
  department_id: 1,
  priority_id: 1,
  status_id: "open",
});

// Ticket posts (supports page number or typed query object)
const postsPageNumber = await client.tickets.getPosts(123, 1);
const postsQuery = await client.tickets.getPosts(123, { page: 1 });
```

### Users

```ts
const users = await client.users.getAll({ page: 1, search: "ivan" });
const user = await client.users.getById(456);

const newUser = await client.users.create({
  name: "Vasily",
  email: "vasily@example.com",
  group_id: 1,
  department: [1],
});
```

### Organizations

```ts
const organizations = await client.organizations.getAll({ page: 1 });

const organization = await client.organizations.create({
  name: "pzs corp",
  email: "support@pzs.com",
  phone: "+78005553535",
});
```

### Dictionaries and Knowledge Base

```ts
const statuses = await client.dictionaries.getStatuses();
const priorities = await client.dictionaries.getPriorities();
const kbArticles = await client.knowledgeBase.getArticles({ page: 1 });
```

## Available Resources

- `client.tickets`
- `client.departments`
- `client.users`
- `client.organizations`
- `client.ticketCustomFields`
- `client.userCustomFields`
- `client.organizationCustomFields`
- `client.dictionaries`
- `client.knowledgeBase`
- `client.telephony`
- `client.system`

## Smoke Test (local project)

For this repository there is a local smoke script for GET methods:

```bash
npm run smoke:get
```

Required env vars:

- `HDE_BASE_URL`
- `HDE_TOKEN` **or** (`HDE_EMAIL` and `HDE_API_KEY`) (dot use both, only one)

Optional:

- `HDE_TICKET_ID`
- `HDE_USER_ID`
- `HDE_ORGANIZATION_ID`

