"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephonyResource = void 0;
const base_resource_1 = require("./base-resource");
class TelephonyResource extends base_resource_1.BaseResource {
    /**
     * Creates or updates a telephony call event in the helpdesk.
     */
    createOrUpdateCall(channelKey, payload) {
        return this.post(`/api/v2/telephony/calls/@${channelKey}/`, payload);
    }
}
exports.TelephonyResource = TelephonyResource;
