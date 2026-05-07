import { ApiDataResponse, Department } from "../types/api-response.type.js";
import { BaseResource } from "./base-resource.js";
export declare class DepartmentsResource extends BaseResource {
    private base;
    /**
     * Returns all departments.
     */
    getAll(): Promise<ApiDataResponse<Department[]>>;
}
