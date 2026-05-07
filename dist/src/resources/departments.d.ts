import { ApiDataResponse, Department } from "../types/api-response.type";
import { BaseResource } from "./base-resource";
export declare class DepartmentsResource extends BaseResource {
    private base;
    /**
     * Returns all departments.
     */
    getAll(): Promise<ApiDataResponse<Department[]>>;
}
