import { DepartmentsResource } from "../resources/departments.js";
import { DictionariesResource } from "../resources/dictionaries.js";
import { KnowledgeBaseResource } from "../resources/knowledge.js";
import { OrganizationCustomFieldsResource } from "../resources/organization-custom-fields.js";
import { OrganizationsResource } from "../resources/organizations.js";
import { SystemResource } from "../resources/system.js";
import { TelephonyResource } from "../resources/telephony.js";
import { TicketCustomFieldsResource } from "../resources/ticket-custom-fields.js";
import { TicketsResource } from "../resources/tickets.js";
import { UserCustomFieldsResource } from "../resources/user-custom-fields.js";
import { UsersResource } from "../resources/users.js";
import { createAuthHeaders } from "./auth.js";
import { HttpClient } from "./http-client.js";
import { RateLimiter } from "./rate-limiter.js";

export type ClientConfig =
  | { baseUrl: string; email: string; apiKey: string }
  | { baseUrl: string; token: string };

export class HelpdeskEddyClient {
  public tickets: TicketsResource;
  public departments: DepartmentsResource;
  public users: UsersResource;
  public organizations: OrganizationsResource;
  public ticketCustomFields: TicketCustomFieldsResource;
  public userCustomFields: UserCustomFieldsResource;
  public organizationCustomFields: OrganizationCustomFieldsResource;
  public dictionaries: DictionariesResource;
  public knowledgeBase: KnowledgeBaseResource;
  public telephony: TelephonyResource;
  public system: SystemResource;

  constructor(config: ClientConfig) {
    const headers = createAuthHeaders(config);

    const apiLimiter = new RateLimiter(4, 1000);
    const kbLimiter = new RateLimiter(2, 1000);

    const apiHttp = new HttpClient(config.baseUrl, headers, apiLimiter);
    const kbHttp = new HttpClient(config.baseUrl, headers, kbLimiter);

    this.tickets = new TicketsResource(apiHttp);
    this.departments = new DepartmentsResource(apiHttp);
    this.users = new UsersResource(apiHttp);
    this.organizations = new OrganizationsResource(apiHttp);
    this.ticketCustomFields = new TicketCustomFieldsResource(apiHttp);
    this.userCustomFields = new UserCustomFieldsResource(apiHttp);
    this.organizationCustomFields = new OrganizationCustomFieldsResource(apiHttp);
    this.dictionaries = new DictionariesResource(apiHttp);
    this.knowledgeBase = new KnowledgeBaseResource(kbHttp);
    this.telephony = new TelephonyResource(apiHttp);
    this.system = new SystemResource(apiHttp);
  }
}
