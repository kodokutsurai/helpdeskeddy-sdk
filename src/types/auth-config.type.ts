/** Auth config with credentials to generate base64 token */
type BasicAuthConfig = {
  baseUrl: string;
  email: string;
  apiKey: string;
};

/** Auth config with ready base64 token from email:apiKey */
type TokenAuthConfig = {
  baseUrl: string;
  token: string;
};

/** rate limits config */
type CommonConfig = {
  rateLimit?: {
    limit: number;
    interval: number;
  };
};

/** base client config includes auth config and rate limits (optional) */
export type ClientConfig = (BasicAuthConfig | TokenAuthConfig) & CommonConfig;
