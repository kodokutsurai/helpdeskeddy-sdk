export interface ClientConfig {
  baseUrl: string;
  email: string;
  apiKey: string;
  rateLimit?: {
    limit: number;
    interval: number;
  };
  fetch?: typeof fetch;
}
