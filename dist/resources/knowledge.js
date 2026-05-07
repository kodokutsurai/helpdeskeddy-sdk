import { BaseResource } from "./base-resource.js";
export class KnowledgeBaseResource extends BaseResource {
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
