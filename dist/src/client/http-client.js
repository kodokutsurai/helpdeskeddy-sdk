"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
class HttpClient {
    constructor(baseUrl, headers, limiter) {
        this.limiter = limiter;
        this.client = axios_1.default.create({
            baseURL: baseUrl,
            headers,
        });
        this.client.interceptors.response.use((res) => res, async (error) => {
            const config = error.config;
            if (!config)
                throw error;
            config.__retryCount = config.__retryCount || 0;
            if (error.response?.status === 429) {
                if (config.__retryCount >= 5) {
                    throw error;
                }
                config.__retryCount++;
                const delay = Math.min(1000 * 2 ** config.__retryCount, 15000);
                await sleep(delay);
                return this.client(config);
            }
            throw error;
        });
    }
    async request(config) {
        return this.limiter.schedule(async () => {
            const res = await this.client.request(config);
            return res.data;
        });
    }
    get(url, params) {
        return this.request({ method: "GET", url, params });
    }
    post(url, data) {
        return this.request({ method: "POST", url, data });
    }
    put(url, data) {
        return this.request({ method: "PUT", url, data });
    }
    delete(url, data) {
        return this.request({ method: "DELETE", url, data });
    }
}
exports.HttpClient = HttpClient;
