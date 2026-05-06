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

export class OrganizationCustomFieldsResource extends BaseResource {
  private base = "/api/v2/organizations/custom_fields";

  /**
   * Returns organization custom fields.
   */
  getAll(query?: PaginationQuery) {
    return this.get<ApiDataResponse<Record<string, CustomField>>>(`${this.base}/`, query);
  }

  /**
   * Returns a single organization custom field by id.
   */
  getById(fieldId: number) {
    return this.get<ApiDataResponse<CustomField>>(`${this.base}/${fieldId}`);
  }

  /**
   * Returns options for an organization custom field.
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
