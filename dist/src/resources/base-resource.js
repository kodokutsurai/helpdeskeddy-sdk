"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResource = void 0;
class BaseResource {
    constructor(http) {
        this.http = http;
    }
    get(url, params) {
        return this.http.get(url, params);
    }
    post(url, data) {
        return this.http.post(url, data);
    }
    put(url, data) {
        return this.http.put(url, data);
    }
    delete(url, data) {
        return this.http.delete(url, data);
    }
}
exports.BaseResource = BaseResource;
