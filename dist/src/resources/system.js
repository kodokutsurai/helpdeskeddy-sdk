"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemResource = void 0;
const base_resource_1 = require("./base-resource");
class SystemResource extends base_resource_1.BaseResource {
    /**
     * Creates a chat visitor session id for anonymous chat integrations.
     */
    createChatVisitorSession(payload) {
        return this.post("/api/v2/chat/visitor/id", payload);
    }
    /**
     * Returns platform IP addresses.
     */
    getIps() {
        return this.get("/api/v2/ips");
    }
}
exports.SystemResource = SystemResource;
