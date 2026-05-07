import { CustomFieldOptionsUpsertPayload } from "../types/api-payload.type";
import { ApiDataResponse, CustomField, CustomFieldOption } from "../types/api-response.type";
import { CustomFieldOptionsQuery, PaginationQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";
export declare class UserCustomFieldsResource extends BaseResource {
    private base;
    /**
     * Returns user custom fields.
     */
    getAll(query?: PaginationQuery): Promise<ApiDataResponse<Record<string, CustomField>>>;
    /**
     * Returns a single user custom field by id.
     */
    getById(fieldId: number): Promise<ApiDataResponse<CustomField>>;
    /**
     * Returns options for a user custom field.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getOptions(fieldId: number, queryOrPage?: CustomFieldOptionsQuery | number): Promise<ApiDataResponse<CustomFieldOption[]>>;
    upsertOptions(fieldId: number, payload: CustomFieldOptionsUpsertPayload): Promise<ApiDataResponse<CustomFieldOption[]>>;
    deleteOption(fieldId: number, optionId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
}
