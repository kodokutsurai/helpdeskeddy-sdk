import { BaseResource } from "./base-resource.js";
export class DepartmentsResource extends BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/departments";
    }
    /**
     * Returns all departments.
     */
    getAll() {
        return this.get(`${this.base}/`);
    }
}
