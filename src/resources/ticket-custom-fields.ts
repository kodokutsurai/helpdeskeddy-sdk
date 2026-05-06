import {
  CustomFieldOptionsUpsertPayload,
} from "../types/api-payload.type";
import {
  ApiDataResponse,
  ApiDeleteResponse,
  CustomField,
  CustomFieldOption,
} from "../types/api-response.type";
import { CustomFieldOptionsQuery, PaginationQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";

export class TicketCustomFieldsResource extends BaseResource {
  private base = "/api/v2/custom_fields";

  /**
   * Returns ticket custom fields.
   * Accepts either a page number for backward compatibility or a typed query object.
   */
  getAll(queryOrPage: PaginationQuery | number = { page: 1 }) {
    const query = typeof queryOrPage === "number" ? { page: queryOrPage } : queryOrPage;
    return this.get<ApiDataResponse<Record<string, CustomField>>>(`${this.base}/`, query);
  }

  /**
   * Returns a single ticket custom field by id.
   */
  getById(fieldId: number) {
    return this.get<ApiDataResponse<CustomField>>(`${this.base}/${fieldId}`);
  }

  /**
   * Returns options for a ticket custom field.
   */
  getOptions(fieldId: number, query?: CustomFieldOptionsQuery) {
    return this.get<ApiDataResponse<CustomFieldOption[]>>(`${this.base}/${fieldId}/options/`, query);
  }

  upsertOptions(fieldId: number, payload: CustomFieldOptionsUpsertPayload) {
    return this.post<ApiDataResponse<CustomFieldOption[]>>(`${this.base}/${fieldId}/options/`, payload);
  }

  deleteOption(fieldId: number, optionId: number) {
    return this.delete<ApiDeleteResponse>(`${this.base}/${fieldId}/options/${optionId}`, undefined);
  }
}
