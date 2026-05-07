export declare function createAuthHeaders(config: {
    email?: string;
    apiKey?: string;
    token?: string;
}): {
    Authorization: string;
    "Content-Type": string;
};
