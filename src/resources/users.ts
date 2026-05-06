import {
  ApiDataResponse,
  ApiDeleteResponse,
  DictionaryItem,
  Note,
  User,
} from "../types/api-response.type";
import {
  NoteCreatePayload,
  UserCreatePayload,
  UserUpdatePayload,
} from "../types/api-payload.type";
import { NotesListQuery, UsersListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";

export class UsersResource extends BaseResource {
  private base = "/api/v2/users";

  /**
   * Returns users with optional filters and pagination.
   */
  getAll(query?: UsersListQuery) {
    return this.get<ApiDataResponse<User[]>>(`${this.base}/`, query);
  }

  getById(userId: number) {
    return this.get<ApiDataResponse<User[]>>(`${this.base}/${userId}`);
  }

  create(payload: UserCreatePayload) {
    return this.post<ApiDataResponse<User>>(`${this.base}/`, payload);
  }

  update(userId: number, payload: UserUpdatePayload) {
    return this.put<ApiDataResponse<User>>(`${this.base}/${userId}`, payload);
  }

  deleteById(userId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${userId}`, undefined);
  }

  /**
   * Returns user status history with optional paging/sorting query params.
   */
  getStatusLog(userId: number, query?: NotesListQuery) {
    return this.get<ApiDataResponse<DictionaryItem[]>>(`${this.base}/${userId}/statuses_log/`, query);
  }

  /**
   * Returns user notes with optional paging/sorting query params.
   */
  getNotes(userId: number, query?: NotesListQuery) {
    return this.get<ApiDataResponse<Note[]>>(`${this.base}/${userId}/notes/`, query);
  }

  createNote(userId: number, payload: NoteCreatePayload) {
    return this.post<ApiDataResponse<Note>>(`${this.base}/${userId}/notes/`, payload);
  }

  deleteNote(userId: number, noteId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${userId}/notes/${noteId}`, undefined);
  }
}
