import { Document } from 'mongoose';

export interface TenantContext extends Document {
    readonly _id: string;
    readonly APP_ID: string;
    readonly TENANT_ID: string,
    readonly COLLABORATION_HOST_URL: string,
    readonly ADMIN_ACCESS_TOKEN: string,
    readonly TEAM_ID: string
}