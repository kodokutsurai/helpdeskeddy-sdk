"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
class RateLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.queue = [];
        this.active = 0;
        setInterval(() => {
            this.active = 0;
            this.run();
        }, interval);
    }
    schedule(task) {
        return new Promise((resolve, reject) => {
            this.queue.push(() => task().then(resolve).catch(reject));
            this.run();
        });
    }
    run() {
        while (this.active < this.limit && this.queue.length) {
            const task = this.queue.shift();
            this.active++;
            task();
        }
    }
}
exports.RateLimiter = RateLimiter;
