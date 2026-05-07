"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionariesResource = void 0;
const base_resource_1 = require("./base-resource");
class DictionariesResource extends base_resource_1.BaseResource {
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
exports.DictionariesResource = DictionariesResource;
