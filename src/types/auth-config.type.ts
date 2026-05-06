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

export type ClientConfig = (BasicAuthConfig | TokenAuthConfig) & CommonConfig;
