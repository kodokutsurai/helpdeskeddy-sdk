"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResource = void 0;
const base_resource_1 = require("./base-resource");
class UsersResource extends base_resource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/users";
    }
    /**
     * Returns users with optional filters and pagination.
     */
    getAll(query) {
        return this.get(`${this.base}/`, query);
    }
    getById(userId) {
        return this.get(`${this.base}/${userId}`);
    }
    create(payload) {
        return this.post(`${this.base}/`, payload);
    }
    update(userId, payload) {
        return this.put(`${this.base}/${userId}`, payload);
    }
    deleteById(userId) {
        return this.delete(`${this.base}/${userId}`, undefined);
    }
    /**
     * Returns user status history with optional paging/sorting query params.
     */
    getStatusLog(userId, query) {
        return this.get(`${this.base}/${userId}/statuses_log/`, query);
    }
    /**
     * Returns user notes with optional paging/sorting query params.
     */
    getNotes(userId, query) {
        return this.get(`${this.base}/${userId}/notes/`, query);
    }
    createNote(userId, payload) {
        return this.post(`${this.base}/${userId}/notes/`, payload);
    }
    deleteNote(userId, noteId) {
        return this.delete(`${this.base}/${userId}/notes/${noteId}`, undefined);
    }
}
exports.UsersResource = UsersResource;
