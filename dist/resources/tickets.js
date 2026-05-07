import { BaseResource } from "./base-resource.js";
export class TicketsResource extends BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/tickets";
    }
    /**
     * Returns tickets using optional filtering and pagination query params.
     */
    getAll(query) {
        return this.get(`${this.base}/`, query);
    }
    getById(ticketId) {
        return this.get(`${this.base}/${ticketId}/`);
    }
    create(payload) {
        return this.post(`${this.base}/`, payload);
    }
    update(ticketId, payload) {
        return this.put(`${this.base}/${ticketId}/`, payload);
    }
    deleteById(ticketId, force = true) {
        return this.delete(`${this.base}/${ticketId}?delete=${String(force)}`, undefined);
    }
    union(ticketId, payload) {
        return this.post(`${this.base}/${ticketId}/union/`, payload);
    }
    /**
     * Returns ticket posts.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getPosts(ticketId, queryOrPage = { page: 1 }) {
        const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
        return this.get(`${this.base}/${ticketId}/posts/`, query);
    }
    addPost(ticketId, payload) {
        return this.post(`${this.base}/${ticketId}/posts/`, payload);
    }
    updatePost(ticketId, postId, payload) {
        return this.put(`${this.base}/${ticketId}/posts/${postId}/`, payload);
    }
    deletePost(ticketId, postId) {
        return this.delete(`${this.base}/${ticketId}/posts/${postId}/`, undefined);
    }
    getComments(ticketId) {
        return this.get(`${this.base}/${ticketId}/comments/`);
    }
    addComment(ticketId, payload) {
        return this.post(`${this.base}/${ticketId}/comments/`, payload);
    }
    updateComment(ticketId, commentId, payload) {
        return this.put(`${this.base}/${ticketId}/comments/${commentId}/`, payload);
    }
    deleteComment(ticketId, commentId) {
        return this.delete(`${this.base}/${ticketId}/comments/${commentId}/`, undefined);
    }
    getAudit(ticketId) {
        return this.get(`${this.base}/${ticketId}/audit/`);
    }
    getBilling(ticketId) {
        return this.get(`${this.base}/${ticketId}/billing/`);
    }
}
