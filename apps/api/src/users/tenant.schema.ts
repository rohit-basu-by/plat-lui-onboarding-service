import * as mongoose from 'mongoose';
export const TenantContextSchema = new mongoose.Schema({
    APP_ID: String,
    TENANT_ID: String,
    COLLABORATION_HOST_URL: String,
    ADMIN_ACCESS_TOKEN: String,
    TEAM_ID: String,
    CREATED_DATE: Date,
    LAST_MODIFIED_DATE: Date
}, { timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'LAST_MODIFIED_AT' } });