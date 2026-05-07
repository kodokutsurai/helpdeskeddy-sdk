import { TelephonyCallPayload } from "../types/api-payload.type";
import { BaseResource } from "./base-resource";
export declare class TelephonyResource extends BaseResource {
    /**
     * Creates or updates a telephony call event in the helpdesk.
     */
    createOrUpdateCall(channelKey: string, payload: TelephonyCallPayload): Promise<{
        data?: unknown;
    }>;
}
