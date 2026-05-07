import { BaseResource } from "./base-resource.js";
export class SystemResource extends BaseResource {
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
