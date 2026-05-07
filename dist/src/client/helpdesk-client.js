"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpdeskEddyClient = void 0;
const departments_1 = require("../resources/departments");
const dictionaries_1 = require("../resources/dictionaries");
const knowledge_1 = require("../resources/knowledge");
const organization_custom_fields_1 = require("../resources/organization-custom-fields");
const organizations_1 = require("../resources/organizations");
const system_1 = require("../resources/system");
const telephony_1 = require("../resources/telephony");
const ticket_custom_fields_1 = require("../resources/ticket-custom-fields");
const tickets_1 = require("../resources/tickets");
const user_custom_fields_1 = require("../resources/user-custom-fields");
const users_1 = require("../resources/users");
const auth_1 = require("./auth");
const http_client_1 = require("./http-client");
const rate_limiter_1 = require("./rate-limiter");
class HelpdeskEddyClient {
    constructor(config) {
        const headers = (0, auth_1.createAuthHeaders)(config);
        const apiLimiter = new rate_limiter_1.RateLimiter(4, 1000);
        const kbLimiter = new rate_limiter_1.RateLimiter(2, 1000);
        const apiHttp = new http_client_1.HttpClient(config.baseUrl, headers, apiLimiter);
        const kbHttp = new http_client_1.HttpClient(config.baseUrl, headers, kbLimiter);
        this.tickets = new tickets_1.TicketsResource(apiHttp);
        this.departments = new departments_1.DepartmentsResource(apiHttp);
        this.users = new users_1.UsersResource(apiHttp);
        this.organizations = new organizations_1.OrganizationsResource(apiHttp);
        this.ticketCustomFields = new ticket_custom_fields_1.TicketCustomFieldsResource(apiHttp);
        this.userCustomFields = new user_custom_fields_1.UserCustomFieldsResource(apiHttp);
        this.organizationCustomFields = new organization_custom_fields_1.OrganizationCustomFieldsResource(apiHttp);
        this.dictionaries = new dictionaries_1.DictionariesResource(apiHttp);
        this.knowledgeBase = new knowledge_1.KnowledgeBaseResource(kbHttp);
        this.telephony = new telephony_1.TelephonyResource(apiHttp);
        this.system = new system_1.SystemResource(apiHttp);
    }
}
exports.HelpdeskEddyClient = HelpdeskEddyClient;
