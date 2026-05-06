import { HttpClient } from "../client/http-client";
import { AxiosRequestConfig } from "axios";

export class BaseResource {
  constructor(protected http: HttpClient) {}

  protected get<T>(url: string, params?: AxiosRequestConfig["params"]) {
    return this.http.get<T>(url, params);
  }

  protected post<T>(url: string, data: unknown) {
    return this.http.post<T>(url, data);
  }
  protected put<T>(url: string, data: unknown) {
    return this.http.put<T>(url, data);
  }

  protected delete<T>(url: string, data: unknown) {
    return this.http.delete<T>(url, data);
  }
}
