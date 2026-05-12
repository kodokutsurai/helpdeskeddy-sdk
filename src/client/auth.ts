export function createAuthHeaders(config: {
  email?: string;
  apiKey?: string;
  token?: string;
}) {
  if (config.token) {
    return {
      Authorization: `Basic ${config.token}`,
      "Content-Type": "application/json",
    };
  }

  if (config.email && config.apiKey) {
    const token = Buffer.from(`${config.email}:${config.apiKey}`).toString(
      "base64",
    );

    return {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    };
  }

  throw new Error("Invalid auth config");
}
