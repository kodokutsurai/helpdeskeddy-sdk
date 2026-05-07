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
