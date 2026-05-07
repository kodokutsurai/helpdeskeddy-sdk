import { ChatVisitorSessionPayload } from "../types/api-payload.type";
import { ApiDataResponse } from "../types/api-response.type";
import { BaseResource } from "./base-resource";
export declare class SystemResource extends BaseResource {
    /**
     * Creates a chat visitor session id for anonymous chat integrations.
     */
    createChatVisitorSession(payload: ChatVisitorSessionPayload): Promise<ApiDataResponse<{
        id: string;
    }>>;
    /**
     * Returns platform IP addresses.
     */
    getIps(): Promise<ApiDataResponse<string[]>>;
}
