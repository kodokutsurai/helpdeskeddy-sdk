import {
  ApiDataResponse,
  ApiDeleteResponse,
  Note,
  Organization,
} from "../types/api-response.type";
import {
  NoteCreatePayload,
  OrganizationCreatePayload,
  OrganizationUpdatePayload,
} from "../types/api-payload.type";
import { NotesListQuery, OrganizationsListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";

export class OrganizationsResource extends BaseResource {
  private base = "/api/v2/organizations";

  /**
   * Returns organizations with optional filters and pagination.
   */
  getAll(query?: OrganizationsListQuery) {
    return this.get<ApiDataResponse<Organization[]>>(`${this.base}/`, query);
  }

  getById(organizationId: number) {
    return this.get<ApiDataResponse<Organization>>(`${this.base}/${organizationId}`);
  }

  create(payload: OrganizationCreatePayload) {
    return this.post<ApiDataResponse<Organization>>(`${this.base}/`, payload);
  }

  update(organizationId: number, payload: OrganizationUpdatePayload) {
    return this.put<ApiDataResponse<Organization>>(`${this.base}/${organizationId}`, payload);
  }

  deleteById(organizationId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${organizationId}`, undefined);
  }

  /**
   * Returns organization notes with optional paging/sorting query params.
   */
  getNotes(organizationId: number, query?: NotesListQuery) {
    return this.get<ApiDataResponse<Note[]>>(`${this.base}/${organizationId}/notes/`, query);
  }

  createNote(organizationId: number, payload: NoteCreatePayload) {
    return this.post<ApiDataResponse<Note>>(`${this.base}/${organizationId}/notes/`, payload);
  }

  deleteNote(organizationId: number, noteId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${organizationId}/notes/${noteId}`, undefined);
  }
}
