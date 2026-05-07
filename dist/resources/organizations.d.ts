import { ApiDataResponse, Note, Organization } from "../types/api-response.type.js";
import { NoteCreatePayload, OrganizationCreatePayload, OrganizationUpdatePayload } from "../types/api-payload.type.js";
import { NotesListQuery, OrganizationsListQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";
export declare class OrganizationsResource extends BaseResource {
    private base;
    /**
     * Returns organizations with optional filters and pagination.
     */
    getAll(query?: OrganizationsListQuery): Promise<ApiDataResponse<Organization[]>>;
    getById(organizationId: number): Promise<ApiDataResponse<Organization>>;
    create(payload: OrganizationCreatePayload): Promise<ApiDataResponse<Organization>>;
    update(organizationId: number, payload: OrganizationUpdatePayload): Promise<ApiDataResponse<Organization>>;
    deleteById(organizationId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
    /**
     * Returns organization notes with optional paging/sorting query params.
     */
    getNotes(organizationId: number, query?: NotesListQuery): Promise<ApiDataResponse<Note[]>>;
    createNote(organizationId: number, payload: NoteCreatePayload): Promise<ApiDataResponse<Note>>;
    deleteNote(organizationId: number, noteId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
}
