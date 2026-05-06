import { ApiDataResponse, DictionaryItem } from "../types/api-response.type";
import { BaseResource } from "./base-resource";

export class DictionariesResource extends BaseResource {
  /**
   * Returns all ticket statuses.
   */
  getStatuses() {
    return this.get<ApiDataResponse<DictionaryItem[]>>("/api/v2/statuses/");
  }

  /**
   * Returns all ticket priorities.
   */
  getPriorities() {
    return this.get<ApiDataResponse<DictionaryItem[]>>("/api/v2/priorities/");
  }

  /**
   * Returns all ticket types.
   */
  getTypes() {
    return this.get<ApiDataResponse<DictionaryItem[]>>("/api/v2/types/");
  }

  /**
   * Returns all user groups.
   */
  getGroups() {
    return this.get<ApiDataResponse<DictionaryItem[]>>("/api/v2/groups/");
  }

  /**
   * Returns all user presence statuses.
   */
  getUserStatuses() {
    return this.get<ApiDataResponse<DictionaryItem[]>>("/api/v2/user_statuses/");
  }
}
