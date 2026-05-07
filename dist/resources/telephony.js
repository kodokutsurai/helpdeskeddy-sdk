import { BaseResource } from "./base-resource.js";
export class TelephonyResource extends BaseResource {
    /**
     * Creates or updates a telephony call event in the helpdesk.
     */
    createOrUpdateCall(channelKey, payload) {
        return this.post(`/api/v2/telephony/calls/@${channelKey}/`, payload);
    }
}
