import { BaseResource } from "./base-resource.js";
export class DictionariesResource extends BaseResource {
    /**
     * Returns all ticket statuses.
     */
    getStatuses() {
        return this.get("/api/v2/statuses/");
    }
    /**
     * Returns all ticket priorities.
     */
    getPriorities() {
        return this.get("/api/v2/priorities/");
    }
    /**
     * Returns all ticket types.
     */
    getTypes() {
        return this.get("/api/v2/types/");
    }
    /**
     * Returns all user groups.
     */
    getGroups() {
        return this.get("/api/v2/groups/");
    }
    /**
     * Returns all user presence statuses.
     */
    getUserStatuses() {
        return this.get("/api/v2/user_statuses/");
    }
}
