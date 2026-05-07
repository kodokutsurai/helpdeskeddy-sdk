import { TelephonyCallPayload } from "../types/api-payload.type.js";
import { BaseResource } from "./base-resource.js";

export class TelephonyResource extends BaseResource {
  /**
   * Creates or updates a telephony call event in the helpdesk.
   */
  createOrUpdateCall(channelKey: string, payload: TelephonyCallPayload) {
    return this.post<{ data?: unknown }>(`/api/v2/telephony/calls/@${channelKey}/`, payload);
  }
}
