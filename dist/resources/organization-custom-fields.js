import { BaseResource } from "./base-resource.js";
export class OrganizationCustomFieldsResource extends BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/organizations/custom_fields";
    }
    /**
     * Returns organization custom fields.
     */
    getAll(query) {
        return this.get(`${this.base}/`, query);
    }
    /**
     * Returns a single organization custom field by id.
     */
    getById(fieldId) {
        return this.get(`${this.base}/${fieldId}`);
    }
    /**
     * Returns options for an organization custom field.
     */
    getOptions(fieldId, query) {
        return this.get(`${this.base}/${fieldId}/options/`, query);
    }
    upsertOptions(fieldId, payload) {
        return this.post(`${this.base}/${fieldId}/options/`, payload);
    }
    deleteOption(fieldId, optionId) {
        return this.delete(`${this.base}/${fieldId}/options/${optionId}`, undefined);
    }
}
