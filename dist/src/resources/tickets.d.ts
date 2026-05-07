import { ApiDataResponse, BillingEntry, Ticket, TicketComment, TicketPost } from "../types/api-response.type";
import { TicketCommentPayload, TicketCreatePayload, TicketPostPayload, TicketUnionPayload, TicketUpdatePayload } from "../types/api-payload.type";
import { PaginationQuery, TicketsListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";
export declare class TicketsResource extends BaseResource {
    private base;
    /**
     * Returns tickets using optional filtering and pagination query params.
     */
    getAll(query?: TicketsListQuery): Promise<ApiDataResponse<Record<string, Ticket>>>;
    getById(ticketId: number): Promise<ApiDataResponse<Ticket>>;
    create(payload: TicketCreatePayload): Promise<ApiDataResponse<Ticket>>;
    update(ticketId: number, payload: TicketUpdatePayload): Promise<ApiDataResponse<Ticket>>;
    deleteById(ticketId: number, force?: boolean): Promise<import("../types/api-response.type").ApiErrorResponse>;
    union(ticketId: number, payload: TicketUnionPayload): Promise<ApiDataResponse<Ticket>>;
    /**
     * Returns ticket posts.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getPosts(ticketId: number, queryOrPage?: PaginationQuery | number): Promise<ApiDataResponse<TicketPost[]>>;
    addPost(ticketId: number, payload: TicketPostPayload): Promise<ApiDataResponse<TicketPost>>;
    updatePost(ticketId: number, postId: number, payload: TicketPostPayload): Promise<ApiDataResponse<TicketPost>>;
    deletePost(ticketId: number, postId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
    getComments(ticketId: number): Promise<ApiDataResponse<TicketComment[]>>;
    addComment(ticketId: number, payload: TicketCommentPayload): Promise<ApiDataResponse<TicketComment>>;
    updateComment(ticketId: number, commentId: number, payload: TicketCommentPayload): Promise<ApiDataResponse<TicketComment>>;
    deleteComment(ticketId: number, commentId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
    getAudit(ticketId: number): Promise<ApiDataResponse<Record<string, unknown>>>;
    getBilling(ticketId: number): Promise<ApiDataResponse<BillingEntry[]>>;
}
