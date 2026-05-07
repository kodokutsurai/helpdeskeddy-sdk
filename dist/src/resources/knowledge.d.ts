import { ApiDataResponse, KnowledgeArticle, KnowledgeCategory } from "../types/api-response.type";
import { KnowledgeListQuery } from "../types/api-query.type";
import { BaseResource } from "./base-resource";
export declare class KnowledgeBaseResource extends BaseResource {
    private base;
    /**
     * Returns knowledge base categories.
     */
    getCategories(query?: KnowledgeListQuery): Promise<ApiDataResponse<Record<string, KnowledgeCategory>>>;
    /**
     * Returns knowledge base articles.
     */
    getArticles(query?: KnowledgeListQuery): Promise<ApiDataResponse<Record<string, KnowledgeArticle>>>;
    /**
     * Returns a single knowledge base article by id.
     */
    getArticle(articleId: number): Promise<ApiDataResponse<KnowledgeArticle>>;
}
