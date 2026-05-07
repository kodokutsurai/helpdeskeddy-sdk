"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCustomFieldsResource = void 0;
const base_resource_1 = require("./base-resource");
class TicketCustomFieldsResource extends base_resource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/custom_fields";
    }
    /**
     * Returns ticket custom fields.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getAll(queryOrPage = { page: 1 }) {
        const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
        return this.get(`${this.base}/`, query);
    }
    /**
     * Returns a single ticket custom field by id.
     */
    getById(fieldId) {
        return this.get(`${this.base}/${fieldId}`);
    }
    /**
     * Returns options for a ticket custom field.
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
exports.TicketCustomFieldsResource = TicketCustomFieldsResource;
