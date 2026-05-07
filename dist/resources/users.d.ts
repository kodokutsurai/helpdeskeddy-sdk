import { ApiDataResponse, DictionaryItem, Note, User } from "../types/api-response.type.js";
import { NoteCreatePayload, UserCreatePayload, UserUpdatePayload } from "../types/api-payload.type.js";
import { NotesListQuery, UsersListQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";
export declare class UsersResource extends BaseResource {
    private base;
    /**
     * Returns users with optional filters and pagination.
     */
    getAll(query?: UsersListQuery): Promise<ApiDataResponse<User[]>>;
    getById(userId: number): Promise<ApiDataResponse<User[]>>;
    create(payload: UserCreatePayload): Promise<ApiDataResponse<User>>;
    update(userId: number, payload: UserUpdatePayload): Promise<ApiDataResponse<User>>;
    deleteById(userId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
    /**
     * Returns user status history with optional paging/sorting query params.
     */
    getStatusLog(userId: number, query?: NotesListQuery): Promise<ApiDataResponse<DictionaryItem[]>>;
    /**
     * Returns user notes with optional paging/sorting query params.
     */
    getNotes(userId: number, query?: NotesListQuery): Promise<ApiDataResponse<Note[]>>;
    createNote(userId: number, payload: NoteCreatePayload): Promise<ApiDataResponse<Note>>;
    deleteNote(userId: number, noteId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
}
