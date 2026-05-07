import { CustomFieldOptionsUpsertPayload } from "../types/api-payload.type";
import { ApiDataResponse, CustomField, CustomFieldOption } from "../types/api-response.type";
import { CustomFieldOptionsQuery, PaginationQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";
export declare class TicketCustomFieldsResource extends BaseResource {
    private base;
    /**
     * Returns ticket custom fields.
     * Accepts either a page number for backward compatibility or a typed query object.
     */
    getAll(queryOrPage?: PaginationQuery | number): Promise<ApiDataResponse<Record<string, CustomField>>>;
    /**
     * Returns a single ticket custom field by id.
     */
    getById(fieldId: number): Promise<ApiDataResponse<CustomField>>;
    /**
     * Returns options for a ticket custom field.
     */
    getOptions(fieldId: number, query?: CustomFieldOptionsQuery): Promise<ApiDataResponse<CustomFieldOption[]>>;
    upsertOptions(fieldId: number, payload: CustomFieldOptionsUpsertPayload): Promise<ApiDataResponse<CustomFieldOption[]>>;
    deleteOption(fieldId: number, optionId: number): Promise<import("../types/api-response.type").ApiErrorResponse>;
}
