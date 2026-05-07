export interface ApiError {
    code: string;
    title: string;
    details: string;
}
export interface ApiErrorResponse {
    errors: ApiError[];
}
export interface LocalizedText {
    ru?: string;
    en?: string;
    ua?: string;
    se?: string;
    [key: string]: string | undefined;
}
export interface Department {
    id: number;
    name: LocalizedText;
}
export interface Ticket {
    id: number;
    pid: number;
    owner_id: number;
    user_id: number;
    user_name: string;
    user_lastname: string;
    user_email: string;
    unique_id: string;
    date_created: string;
    date_updated: string;
    title: string;
    source?: string;
    status_id?: string;
    [key: string]: unknown;
}
export interface TicketMessageFile {
    id?: number;
    name?: string;
    link?: string;
    [key: string]: unknown;
}
export interface TicketPost {
    ticket_id: number;
    id: number;
    user_id: number;
    text: string;
    date_created: string;
    date_updated?: string;
    files: TicketMessageFile[];
    [key: string]: unknown;
}
export interface TicketComment {
    ticket_id: number;
    id: number;
    user_id: number;
    text: string;
    date_created: string;
    visible: string;
    files: TicketMessageFile[];
    [key: string]: unknown;
}
export interface CustomFieldOption {
    id: number;
    pid?: number;
    name: LocalizedText;
}
export interface CustomField {
    id: number;
    name: LocalizedText | Record<string, LocalizedText>;
    field_type: string;
    [key: string]: unknown;
}
export interface BillingEntry {
    id: number;
    action: string | null;
    comment: string;
    spent_seconds: number;
    paid_seconds: number;
    staff_id: number;
    staff_name: string;
    billable: number;
    date_created?: string;
    [key: string]: unknown;
}
export interface DictionaryItem {
    id: number | string;
    name: LocalizedText;
    [key: string]: unknown;
}
export interface User {
    id: number;
    date_created?: string;
    date_updated?: string;
    name?: string;
    lastname?: string;
    alias?: string;
    email?: string;
    phone?: string;
    [key: string]: unknown;
}
export interface Organization {
    id: number;
    date_created?: string;
    date_updated?: string;
    name: string;
    domains?: string;
    address?: string;
    phone?: string;
    email?: string;
    [key: string]: unknown;
}
export interface Note {
    id: number;
    creator_id: number;
    text: string;
    date_created: string;
    date_updated: string;
    [key: string]: unknown;
}
export interface KnowledgeCategory {
    id: number;
    parent_id: number;
    position?: number;
    date_created?: string;
    date_updated?: string;
    access?: string;
    [key: string]: unknown;
}
export interface KnowledgeArticle {
    id: number;
    body: LocalizedText;
    title?: LocalizedText;
    date_created: string;
    date_updated: string;
    created_by: number;
    updated_by: number;
    access?: string;
    [key: string]: unknown;
}
export interface ApiDataResponse<T> {
    data: T;
}
export interface ApiPagination {
    total: number | string;
    per_page: number;
    current_page: number;
    total_pages: number;
    [key: string]: unknown;
}
export interface ApiPaginatedResponse<T> extends ApiDataResponse<T> {
    pagination: ApiPagination;
}
export type ApiDeleteResponse = ApiErrorResponse;
