"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthHeaders = createAuthHeaders;
function createAuthHeaders(config) {
    if (config.token) {
        return {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json",
        };
    }
    if (config.email && config.apiKey) {
        const token = Buffer.from(`${config.email}:${config.apiKey}`).toString("base64");
        return {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
        };
    }
    throw new Error("Invalid auth config");
}
