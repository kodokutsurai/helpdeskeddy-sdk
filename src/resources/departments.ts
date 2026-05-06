import {
  ApiDataResponse,
  Department,
} from "../types/api-response.type";
import { BaseResource } from "./base-resource";

export class DepartmentsResource extends BaseResource {
  private base = "/api/v2/departments";

  /**
   * Returns all departments.
   */
  getAll() {
    return this.get<ApiDataResponse<Department[]>>(`${this.base}/`);
  }
}
