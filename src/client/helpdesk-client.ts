import { DepartmentsResource } from "../resources/departments";
import { DictionariesResource } from "../resources/dictionaries";
import { KnowledgeBaseResource } from "../resources/knowledge";
import { OrganizationCustomFieldsResource } from "../resources/organization-custom-fields";
import { OrganizationsResource } from "../resources/organizations";
import { SystemResource } from "../resources/system";
import { TelephonyResource } from "../resources/telephony";
import { TicketCustomFieldsResource } from "../resources/ticket-custom-fields";
import { TicketsResource } from "../resources/tickets";
import { UserCustomFieldsResource } from "../resources/user-custom-fields";
import { UsersResource } from "../resources/users";
import { createAuthHeaders } from "./auth";
import { HttpClient } from "./http-client";
import { RateLimiter } from "./rate-limiter";

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
