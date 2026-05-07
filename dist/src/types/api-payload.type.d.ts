import { LocalizedText } from "./api-response.type";
export type TicketStatus = "open" | "pending" | "solved" | "closed" | string;
export type UserStatus = "active" | "disabled" | string;
export interface TicketCreatePayload {
    pid?: number;
    title: string;
    description?: string;
    sla_date?: string;
    status_id?: TicketStatus;
    priority_id?: number;
    type_id?: number;
    department_id?: number;
    ticket_lock?: boolean;
    owner_id?: number;
    user_id?: number;
    user_email?: string;
    cc?: string[];
    bcc?: string[];
    followers?: number[];
    create_from_user?: boolean;
    custom_fields?: Record<string, unknown>;
    tags?: string[];
}
export interface TicketUpdatePayload {
    title?: string;
    description?: string;
    sla_date?: string;
    sla_policy_id?: number;
    status_id?: TicketStatus;
    priority_id?: number;
    type_id?: number;
    department_id?: number;
    ticket_lock?: boolean;
    owner_id?: number;
    user_id?: number;
    cc?: string[];
    bcc?: string[];
    followers?: number[];
    custom_fields?: Record<string, unknown>;
    tags?: string[];
}
export interface TicketUnionPayload {
    ticket_list: number[];
}
export interface TicketPostPayload {
    text: string;
    user_id?: number;
}
export interface TicketCommentPayload {
    text: string;
    user_id?: number;
}
export interface UserCreatePayload {
    name: string;
    email: string;
    department?: number[];
    password?: string;
    group_id?: number;
    lastname?: string;
    alias?: string;
    phone?: string;
    skype?: string;
    website?: string;
    organization?: string;
    organiz_id?: number;
    status?: UserStatus;
    language?: string;
    notifications?: 0 | 1;
    user_status?: string;
    custom_fields?: Record<string, unknown>;
}
export interface UserUpdatePayload {
    name?: string;
    email?: string;
    department?: number[];
    password?: string;
    group_id?: number;
    lastname?: string;
    alias?: string;
    phone?: string;
    skype?: string;
    website?: string;
    organization?: string;
    organiz_id?: number;
    status?: UserStatus;
    language?: string;
    notifications?: 0 | 1;
    user_status?: string;
    custom_fields?: Record<string, unknown>;
}
export interface NoteCreatePayload {
    text: string;
}
export interface OrganizationCreatePayload {
    name: string;
    domains?: string;
    address?: string;
    phone?: string;
    email?: string;
    web?: string;
    minute_limit?: number | string;
    employees?: number[];
    managers?: number[];
    custom_fields?: Record<string, unknown>;
}
export interface OrganizationUpdatePayload {
    name?: string;
    domains?: string;
    address?: string;
    phone?: string;
    email?: string;
    web?: string;
    minute_limit?: number | string;
    employees?: number[];
    managers?: number[];
    custom_fields?: Record<string, unknown>;
}
export interface CustomFieldOptionsUpsertPayload {
    options: Array<{
        id?: number;
        pid?: number;
        name: LocalizedText;
    }>;
}
export interface TelephonyCallPayload {
    action: string;
    direction?: "in" | "out" | string;
    phone?: string;
    call_status?: string;
    call_id?: string;
    pbx_call_id?: string;
    pbx_user_ids?: number[];
    user_ids?: number[];
    group_ids?: number[];
    pbx_user_id?: number;
    user_id?: number;
    audio_record?: string;
    comment?: string;
}
export interface ChatVisitorSessionPayload {
    email?: string;
    name?: string;
    phone?: string;
}
