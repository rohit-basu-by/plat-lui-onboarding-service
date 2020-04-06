import { Document } from 'mongoose';

export interface User extends Document {
    readonly _id: string;
    readonly APP_USR_ID: string;
    readonly APP_USR_NAME: string,
    readonly APP_ID: string,
    readonly REMOTE_USR_NAME: string,
    readonly APP_TENANT_ID: string,
    readonly REMOTE_TEAM_ID: string,
    readonly REMOTE_USR_ID: string,
    readonly REMOTE_USR_TOKEN: string,
    readonly F_NAME : string,
    readonly L_NAME : string,
    readonly IMAGE_URI : string
}