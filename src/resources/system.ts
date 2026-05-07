import { ChatVisitorSessionPayload } from "../types/api-payload.type.js";
import { ApiDataResponse } from "../types/api-response.type.js";
import { BaseResource } from "./base-resource.js";

export class SystemResource extends BaseResource {
  /**
   * Creates a chat visitor session id for anonymous chat integrations.
   */
  createChatVisitorSession(payload: ChatVisitorSessionPayload) {
    return this.post<ApiDataResponse<{ id: string }>>("/api/v2/chat/visitor/id", payload);
  }

  /**
   * Returns platform IP addresses.
   */
  getIps() {
    return this.get<ApiDataResponse<string[]>>("/api/v2/ips");
  }
}
