import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RateLimiter } from "./rate-limiter";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

interface RetryConfig extends AxiosRequestConfig {
  __retryCount?: number;
}

export class HttpClient {
  private client: AxiosInstance;

  constructor(
    baseUrl: string,
    headers: Record<string, string>,
    private limiter: RateLimiter,
  ) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers,
    });

    this.client.interceptors.response.use(
      (res) => res,
      async (error) => {
        const config = error.config as RetryConfig;

        if (!config) throw error;

        config.__retryCount = config.__retryCount || 0;

        if (error.response?.status === 429) {
          if (config.__retryCount >= 5) {
            throw error;
          }

          config.__retryCount++;

          const delay = Math.min(1000 * 2 ** config.__retryCount, 15000);
          await sleep(delay);

          return this.client(config);
        }

        throw error;
      },
    );
  }

  async request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.limiter.schedule(async () => {
      const res = await this.client.request<T>(config);
      return res.data;
    });
  }

  get<T>(url: string, params?: AxiosRequestConfig["params"]) {
    return this.request<T>({ method: "GET", url, params });
  }

  post<T>(url: string, data: unknown) {
    return this.request<T>({ method: "POST", url, data });
  }

  put<T>(url: string, data: unknown) {
    return this.request<T>({ method: "PUT", url, data });
  }

  delete<T>(url: string, data: unknown) {
    return this.request<T>({ method: "DELETE", url, data });
  }
}
