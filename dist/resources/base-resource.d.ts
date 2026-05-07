import { HttpClient } from "../client/http-client.js";
import { AxiosRequestConfig } from "axios";
export declare class BaseResource {
    protected http: HttpClient;
    constructor(http: HttpClient);
    protected get<T>(url: string, params?: AxiosRequestConfig["params"]): Promise<T>;
    protected post<T>(url: string, data: unknown): Promise<T>;
    protected put<T>(url: string, data: unknown): Promise<T>;
    protected delete<T>(url: string, data: unknown): Promise<T>;
}
