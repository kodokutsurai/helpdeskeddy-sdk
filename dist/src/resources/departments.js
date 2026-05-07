"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsResource = void 0;
const base_resource_1 = require("./base-resource");
class DepartmentsResource extends base_resource_1.BaseResource {
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
exports.DepartmentsResource = DepartmentsResource;
