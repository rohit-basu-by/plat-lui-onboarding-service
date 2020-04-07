import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    APP_USR_NAME: String,
    REMOTE_USR_NAME: String,
    APP_TENANT_ID: String,
    REMOTE_TEAM_ID: String,
    REMOTE_USR_ID: String,
    REMOTE_USR_TOKEN: String,
    F_NAME : String,
    L_NAME : String,
    IMAGE_URI : String,
    CREATED_DATE: Date,
    LAST_MODIFIED_DATE: Date
}, { timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'LAST_MODIFIED_AT' } });

mongoose.set('debug', true);