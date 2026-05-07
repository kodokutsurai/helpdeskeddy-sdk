export declare class RateLimiter {
    private limit;
    private interval;
    private queue;
    private active;
    constructor(limit: number, interval: number);
    schedule<T>(task: () => Promise<T>): Promise<T>;
    private run;
}
