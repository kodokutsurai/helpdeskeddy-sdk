import { BaseResource } from "./base-resource.js";
export class OrganizationsResource extends BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/organizations";
    }
    /**
     * Returns organizations with optional filters and pagination.
     */
    getAll(query) {
        return this.get(`${this.base}/`, query);
    }
    getById(organizationId) {
        return this.get(`${this.base}/${organizationId}`);
    }
    create(payload) {
        return this.post(`${this.base}/`, payload);
    }
    update(organizationId, payload) {
        return this.put(`${this.base}/${organizationId}`, payload);
    }
    deleteById(organizationId) {
        return this.delete(`${this.base}/${organizationId}`, undefined);
    }
    /**
     * Returns organization notes with optional paging/sorting query params.
     */
    getNotes(organizationId, query) {
        return this.get(`${this.base}/${organizationId}/notes/`, query);
    }
    createNote(organizationId, payload) {
        return this.post(`${this.base}/${organizationId}/notes/`, payload);
    }
    deleteNote(organizationId, noteId) {
        return this.delete(`${this.base}/${organizationId}/notes/${noteId}`, undefined);
    }
}
