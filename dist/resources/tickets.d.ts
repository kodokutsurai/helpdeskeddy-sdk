import { ApiDataResponse, ApiPaginatedResponse, BillingEntry, Ticket, TicketComment, TicketPost } from "../types/api-response.type.js";
import { TicketCommentPayload, TicketCreatePayload, TicketPostPayload, TicketUnionPayload, TicketUpdatePayload } from "../types/api-payload.type.js";
import { PaginationQuery, TicketsListQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";
export declare class TicketsResource extends BaseResource {
    private base;
    /**
     * Returns tickets using optional filtering and pagination query params.
     */
    getAll(query?: TicketsListQuery): Promise<ApiPaginatedResponse<Record<string, Ticket>>>;
    getById(ticketId: number): Promise<ApiDataResponse<Ticket>>;
    create(payload: TicketCreatePayload): Promise<ApiDataResponse<Ticket>>;
    update(ticketId: number, payload: TicketUpdatePayload): Promise<ApiDataResponse<Ticket>>;
    deleteById(ticketId: number, force?: boolean): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
    union(ticketId: number, payload: TicketUnionPayload): Promise<ApiDataResponse<Ticket>>;
    /**
     * Returns ticket posts.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getPosts(ticketId: number, queryOrPage?: PaginationQuery | number): Promise<ApiPaginatedResponse<TicketPost[]>>;
    addPost(ticketId: number, payload: TicketPostPayload): Promise<ApiDataResponse<TicketPost>>;
    updatePost(ticketId: number, postId: number, payload: TicketPostPayload): Promise<ApiDataResponse<TicketPost>>;
    deletePost(ticketId: number, postId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
    getComments(ticketId: number): Promise<ApiPaginatedResponse<TicketComment[]>>;
    addComment(ticketId: number, payload: TicketCommentPayload): Promise<ApiDataResponse<TicketComment>>;
    updateComment(ticketId: number, commentId: number, payload: TicketCommentPayload): Promise<ApiDataResponse<TicketComment>>;
    deleteComment(ticketId: number, commentId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
    getAudit(ticketId: number): Promise<ApiDataResponse<Record<string, unknown>>>;
    getBilling(ticketId: number): Promise<ApiDataResponse<BillingEntry[]>>;
}
