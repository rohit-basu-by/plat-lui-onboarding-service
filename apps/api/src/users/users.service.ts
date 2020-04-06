import { Injectable } from '@nestjs/common';
import { User } from './users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRemoteUserDto } from './dto/user.dto';
import { UserCollabService } from './users.collab.service';
import { TenantContext } from './tenant.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('TenantContext') private tenantContextModel: Model<TenantContext>,
        private readonly userCollabService: UserCollabService) { }

    async fetchUser(id: string, username: string, tenant_id: string, app_id: string): Promise<User> {

        let user: User = await this.userModel.findOne({
            APP_USR_ID: id,
            APP_USR_NAME: username,
            APP_TENANT_ID: tenant_id,
            APP_ID: app_id
        }
        );
        if (!user) {
            let tenant_context: TenantContext = await this.tenantContextModel.findOne({
                APP_ID: app_id,
                TENANT_ID: tenant_id,
            });
            const remoteUsrObj = await this.userCollabService.createUser(username, tenant_context);
            const personalToken = await this.userCollabService.createUserAccessToken(remoteUsrObj.id);

            const createdUser = new this.userModel({
                APP_USR_NAME: username,
                REMOTE_USR_NAME: remoteUsrObj.email,
                APP_TENANT_ID: tenant_id,
                REMOTE_TEAM_ID: tenant_context.TEAM_ID,
                APP_USR_ID: id,
                APP_ID: app_id,
                REMOTE_USR_ID: remoteUsrObj.id,
                REMOTE_USR_TOKEN: personalToken,
            });
            user = await createdUser.save();
        }
        return user;
    }
}
