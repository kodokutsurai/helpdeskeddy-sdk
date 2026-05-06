import {
  ApiDataResponse,
  ApiDeleteResponse,
  BillingEntry,
  Ticket,
  TicketComment,
  TicketPost,
} from "../types/api-response.type";
import {
  TicketCommentPayload,
  TicketCreatePayload,
  TicketPostPayload,
  TicketUnionPayload,
  TicketUpdatePayload,
} from "../types/api-payload.type";
import { PaginationQuery, TicketsListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";

export class TicketsResource extends BaseResource {
  private base = "/api/v2/tickets";

  /**
   * Returns tickets using optional filtering and pagination query params.
   */
  getAll(query?: TicketsListQuery) {
    return this.get<ApiDataResponse<Record<string, Ticket>>>(`${this.base}/`, query);
  }

  getById(ticketId: number) {
    return this.get<ApiDataResponse<Ticket>>(`${this.base}/${ticketId}/`);
  }

  create(payload: TicketCreatePayload) {
    return this.post<ApiDataResponse<Ticket>>(`${this.base}/`, payload);
  }

  update(ticketId: number, payload: TicketUpdatePayload) {
    return this.put<ApiDataResponse<Ticket>>(`${this.base}/${ticketId}/`, payload);
  }

  deleteById(ticketId: number, force = true) {
    return this.delete<ApiDeleteResponse>(
      `${this.base}/${ticketId}?delete=${String(force)}`,
      undefined,
    );
  }

  union(ticketId: number, payload: TicketUnionPayload) {
    return this.post<ApiDataResponse<Ticket>>(`${this.base}/${ticketId}/union/`, payload);
  }

  /**
   * Returns ticket posts.
   * Accepts either a page number for backward compatibility or a typed query object.
   */
  getPosts(ticketId: number, queryOrPage: PaginationQuery | number = { page: 1 }) {
    const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
    return this.get<ApiDataResponse<TicketPost[]>>(`${this.base}/${ticketId}/posts/`, query);
  }

  addPost(ticketId: number, payload: TicketPostPayload) {
    return this.post<ApiDataResponse<TicketPost>>(`${this.base}/${ticketId}/posts/`, payload);
  }

  updatePost(ticketId: number, postId: number, payload: TicketPostPayload) {
    return this.put<ApiDataResponse<TicketPost>>(
      `${this.base}/${ticketId}/posts/${postId}/`,
      payload,
    );
  }

  deletePost(ticketId: number, postId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${ticketId}/posts/${postId}/`, undefined);
  }

  getComments(ticketId: number) {
    return this.get<ApiDataResponse<TicketComment[]>>(`${this.base}/${ticketId}/comments/`);
  }

  addComment(ticketId: number, payload: TicketCommentPayload) {
    return this.post<ApiDataResponse<TicketComment>>(`${this.base}/${ticketId}/comments/`, payload);
  }

  updateComment(ticketId: number, commentId: number, payload: TicketCommentPayload) {
    return this.put<ApiDataResponse<TicketComment>>(
      `${this.base}/${ticketId}/comments/${commentId}/`,
      payload,
    );
  }

  deleteComment(ticketId: number, commentId: number) {
    return this.delete<ApiDeleteResponse>(
      `${this.base}/${ticketId}/comments/${commentId}/`,
      undefined,
    );
  }

  getAudit(ticketId: number) {
    return this.get<ApiDataResponse<Record<string, unknown>>>(`${this.base}/${ticketId}/audit/`);
  }

  getBilling(ticketId: number) {
    return this.get<ApiDataResponse<BillingEntry[]>>(`${this.base}/${ticketId}/billing/`);
  }
}
