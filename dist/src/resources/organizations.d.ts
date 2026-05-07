import { ApiDataResponse, Note, Organization } from "../types/api-response.type";
import { NoteCreatePayload, OrganizationCreatePayload, OrganizationUpdatePayload } from "../types/api-payload.type";
import { NotesListQuery, OrganizationsListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";
export declare class OrganizationsResource extends BaseResource {
    private base;
    /**
     * Returns organizations with optional filters and pagination.
     */
    getAll(query?: OrganizationsListQuery): Promise<ApiDataResponse<Organization[]>>;
    getById(organizationId: number): Promise<ApiDataResponse<Organization>>;
    create(payload: OrganizationCreatePayload): Promise<ApiDataResponse<Organization>>;
    update(organizationId: number, payload: OrganizationUpdatePayload): Promise<ApiDataResponse<Organization>>;
    deleteById(organizationId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
    /**
     * Returns organization notes with optional paging/sorting query params.
     */
    getNotes(organizationId: number, query?: NotesListQuery): Promise<ApiDataResponse<Note[]>>;
    createNote(organizationId: number, payload: NoteCreatePayload): Promise<ApiDataResponse<Note>>;
    deleteNote(organizationId: number, noteId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
}
