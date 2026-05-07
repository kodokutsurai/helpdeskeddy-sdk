import { ApiDataResponse, DictionaryItem } from "../types/api-response.type";
import { BaseResource } from "./base-resource";
export declare class DictionariesResource extends BaseResource {
    /**
     * Returns all ticket statuses.
     */
    getStatuses(): Promise<ApiDataResponse<DictionaryItem[]>>;
    /**
     * Returns all ticket priorities.
     */
    getPriorities(): Promise<ApiDataResponse<DictionaryItem[]>>;
    /**
     * Returns all ticket types.
     */
    getTypes(): Promise<ApiDataResponse<DictionaryItem[]>>;
    /**
     * Returns all user groups.
     */
    getGroups(): Promise<ApiDataResponse<DictionaryItem[]>>;
    /**
     * Returns all user presence statuses.
     */
    getUserStatuses(): Promise<ApiDataResponse<DictionaryItem[]>>;
}
