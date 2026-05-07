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
export type ClientConfig = {
    baseUrl: string;
    email: string;
    apiKey: string;
} | {
    baseUrl: string;
    token: string;
};
export declare class HelpdeskEddyClient {
    tickets: TicketsResource;
    departments: DepartmentsResource;
    users: UsersResource;
    organizations: OrganizationsResource;
    ticketCustomFields: TicketCustomFieldsResource;
    userCustomFields: UserCustomFieldsResource;
    organizationCustomFields: OrganizationCustomFieldsResource;
    dictionaries: DictionariesResource;
    knowledgeBase: KnowledgeBaseResource;
    telephony: TelephonyResource;
    system: SystemResource;
    constructor(config: ClientConfig);
}
