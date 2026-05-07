import {
  CustomFieldOptionsUpsertPayload,
} from "../types/api-payload.type.js";
import {
  ApiDataResponse,
  ApiDeleteResponse,
  ApiPaginatedResponse,
  CustomField,
  CustomFieldOption,
} from "../types/api-response.type.js";
import { CustomFieldOptionsQuery, PaginationQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";

export class UserCustomFieldsResource extends BaseResource {
  private base = "/api/v2/users/custom_fields";

  /**
   * Returns user custom fields.
   */
  getAll(query?: PaginationQuery) {
    return this.get<ApiPaginatedResponse<Record<string, CustomField>>>(`${this.base}/`, query);
  }

  /**
   * Returns a single user custom field by id.
   */
  getById(fieldId: number) {
    return this.get<ApiDataResponse<CustomField>>(`${this.base}/${fieldId}`);
  }

  /**
   * Returns options for a user custom field.
   * Accepts either a page number for backward compatibility or a typed query object.
   */
  getOptions(fieldId: number, queryOrPage: CustomFieldOptionsQuery | number = { page: 1 }) {
    const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
    return this.get<ApiPaginatedResponse<CustomFieldOption[]>>(`${this.base}/${fieldId}/options/`, query);
  }

  upsertOptions(fieldId: number, payload: CustomFieldOptionsUpsertPayload) {
    return this.post<ApiDataResponse<CustomFieldOption[]>>(`${this.base}/${fieldId}/options/`, payload);
  }

  deleteOption(fieldId: number, optionId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${fieldId}/options/${optionId}`, undefined);
  }
}
