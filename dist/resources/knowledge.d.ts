import { ApiDataResponse, ApiPaginatedResponse, KnowledgeArticle, KnowledgeCategory } from "../types/api-response.type.js";
import { KnowledgeListQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";
export declare class KnowledgeBaseResource extends BaseResource {
    private base;
    /**
     * Returns knowledge base categories.
     */
    getCategories(query?: KnowledgeListQuery): Promise<ApiPaginatedResponse<Record<string, KnowledgeCategory>>>;
    /**
     * Returns knowledge base articles.
     */
    getArticles(query?: KnowledgeListQuery): Promise<ApiPaginatedResponse<Record<string, KnowledgeArticle>>>;
    /**
     * Returns a single knowledge base article by id.
     */
    getArticle(articleId: number): Promise<ApiDataResponse<KnowledgeArticle>>;
}
