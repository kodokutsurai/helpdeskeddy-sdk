import {
  ApiDataResponse,
  KnowledgeArticle,
  KnowledgeCategory,
} from "../types/api-response.type.js";
import { KnowledgeListQuery } from "../types/api-query.type.js";
import { BaseResource } from "./base-resource.js";

export class KnowledgeBaseResource extends BaseResource {
  private base = "/api/v2/knowledge_base";

  /**
   * Returns knowledge base categories.
   */
  getCategories(query?: KnowledgeListQuery) {
    return this.get<ApiDataResponse<Record<string, KnowledgeCategory>>>(`${this.base}/categories/`, query);
  }

  /**
   * Returns knowledge base articles.
   */
  getArticles(query?: KnowledgeListQuery) {
    return this.get<ApiDataResponse<Record<string, KnowledgeArticle>>>(`${this.base}/articles/`, query);
  }

  /**
   * Returns a single knowledge base article by id.
   */
  getArticle(articleId: number) {
    return this.get<ApiDataResponse<KnowledgeArticle>>(`${this.base}/articles/${articleId}`);
  }
}
