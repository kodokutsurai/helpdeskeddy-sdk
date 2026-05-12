import { TicketStatus, UserStatus } from "./api-payload.type.js";

/**
 * Common pagination query parameters.
 */
export interface PaginationQuery {
  /** Result page number (1-based). */
  page?: number;
}

/**
 * Query parameters for ticket list retrieval.
 */
export interface TicketsListQuery extends PaginationQuery {
  /** Ticket status identifier, including custom statuses. */
  status_id?: TicketStatus;
  /** Priority identifier. */
  priority_id?: number;
  /** Ticket type identifier. */
  type_id?: number;
  /** Department identifier. */
  department_id?: number;
  /** Requester user identifier. */
  user_id?: number;
  /** Assigned owner identifier. */
  owner_id?: number;
  /** Lower bound for update date/time. */
  updated_from?: string;
  /** Upper bound for update date/time. */
  updated_to?: string;
  /** Lower bound for creation date/time. */
  created_from?: string;
  /** Upper bound for creation date/time. */
  created_to?: string;
  /** Free-text search query. */
  search?: string;
}

/**
 * Query parameters for user list retrieval.
 */
export interface UsersListQuery extends PaginationQuery {
  /** User group identifier. */
  group_id?: number;
  /** Department identifier. */
  department_id?: number;
  /** User account status, including custom values. */
  status?: UserStatus;
  /** Workspace-specific user presence/status identifier. */
  user_status?: string;
  /** Organization identifier. */
  organization_id?: number;
  /** Free-text search query. */
  search?: string;
}

/**
 * Query parameters for organization list retrieval.
 */
export interface OrganizationsListQuery extends PaginationQuery {
  /** Manager user identifier. */
  manager_id?: number;
  /** Employee user identifier. */
  employee_id?: number;
  /** Free-text search query. */
  search?: string;
}

/**
 * Query parameters for note/history lists.
 */
export interface NotesListQuery extends PaginationQuery {
  /** Sort direction. */
  sort?: "asc" | "desc";
}

/**
 * Query parameters for knowledge base lists.
 */
export interface KnowledgeListQuery extends PaginationQuery {
  /** Public filter */
  public: boolean;
  /** Category identifier. */
  category_id?: number;
  /** Free-text search query. */
  search?: string;
}

/**
 * Query parameters for custom field option lists.
 */
export interface CustomFieldOptionsQuery extends PaginationQuery {
  /** Parent option identifier for hierarchical options. */
  pid?: number;
}
