import { BaseResource } from "./base-resource.js";
export class UserCustomFieldsResource extends BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/users/custom_fields";
    }
    /**
     * Returns user custom fields.
     */
    getAll(query) {
        return this.get(`${this.base}/`, query);
    }
    /**
     * Returns a single user custom field by id.
     */
    getById(fieldId) {
        return this.get(`${this.base}/${fieldId}`);
    }
    /**
     * Returns options for a user custom field.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getOptions(fieldId, queryOrPage = { page: 1 }) {
        const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
        return this.get(`${this.base}/${fieldId}/options/`, query);
    }
    upsertOptions(fieldId, payload) {
        return this.post(`${this.base}/${fieldId}/options/`, payload);
    }
    deleteOption(fieldId, optionId) {
        return this.delete(`${this.base}/${fieldId}/options/${optionId}`, undefined);
    }
}
