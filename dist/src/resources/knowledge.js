"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeBaseResource = void 0;
const base_resource_1 = require("./base-resource");
class KnowledgeBaseResource extends base_resource_1.BaseResource {
    constructor() {
        super(...arguments);
        this.base = "/api/v2/knowledge_base";
    }
    /**
     * Returns knowledge base categories.
     */
    getCategories(query) {
        return this.get(`${this.base}/categories/`, query);
    }
    /**
     * Returns knowledge base articles.
     */
    getArticles(query) {
        return this.get(`${this.base}/articles/`, query);
    }
    /**
     * Returns a single knowledge base article by id.
     */
    getArticle(articleId) {
        return this.get(`${this.base}/articles/${articleId}`);
    }
}
exports.KnowledgeBaseResource = KnowledgeBaseResource;
