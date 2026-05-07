import { CustomFieldOptionsUpsertPayload } from "../types/api-payload.type.js";
import { ApiDataResponse, CustomField, CustomFieldOption } from "../types/api-response.type.js";
import { CustomFieldOptionsQuery, PaginationQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";
export declare class OrganizationCustomFieldsResource extends BaseResource {
    private base;
    /**
     * Returns organization custom fields.
     */
    getAll(query?: PaginationQuery): Promise<ApiDataResponse<Record<string, CustomField>>>;
    /**
     * Returns a single organization custom field by id.
     */
    getById(fieldId: number): Promise<ApiDataResponse<CustomField>>;
    /**
     * Returns options for an organization custom field.
     */
    getOptions(fieldId: number, query?: CustomFieldOptionsQuery): Promise<ApiDataResponse<CustomFieldOption[]>>;
    upsertOptions(fieldId: number, payload: CustomFieldOptionsUpsertPayload): Promise<ApiDataResponse<CustomFieldOption[]>>;
    deleteOption(fieldId: number, optionId: number): Promise<import("../types/api-response.type.js").ApiErrorResponse>;
}
