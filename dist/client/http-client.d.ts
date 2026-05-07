import { AxiosRequestConfig } from "axios";
import { RateLimiter } from "./rate-limiter.js";
export declare class HttpClient {
    private limiter;
    private client;
    constructor(baseUrl: string, headers: Record<string, string>, limiter: RateLimiter);
    request<T>(config: AxiosRequestConfig): Promise<T>;
    get<T>(url: string, params?: AxiosRequestConfig["params"]): Promise<T>;
    post<T>(url: string, data: unknown): Promise<T>;
    put<T>(url: string, data: unknown): Promise<T>;
    delete<T>(url: string, data: unknown): Promise<T>;
}
