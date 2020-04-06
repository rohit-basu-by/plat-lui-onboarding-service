import { Injectable, HttpService } from "@nestjs/common";
import { RemoteUserDto, CreateRemoteUserDto } from "./dto/user.dto";
import { TenantContext } from "./tenant.interface";
import { map } from "rxjs/operators";
import { response } from "express";

@Injectable()
export class UserCollabService {
    constructor(private httpService: HttpService) { }

    async createUserAccessToken(id: string): Promise<string> {
        return null;
    }
    async createUser(username: string, tenant_context: TenantContext): Promise<RemoteUserDto> {
        const newUser: CreateRemoteUserDto = {
            email: username,
            first_name: "",
            last_name: "",
            username: username,
            password: "#$collab123*"
        }

        const userCreated = await this.httpService.post<RemoteUserDto>(tenant_context.COLLABORATION_HOST_URL + '/users',
            newUser,
            {
                headers
                    : {
                    'Authorization': 'Bearer ' + tenant_context.ADMIN_ACCESS_TOKEN,
                    'Content-Type': 'application/json'
                }
            }
        ).toPromise();

        
        return userCreated.data;
    }

    async addUserToDeafultTeam(): Promise<string> {
        return null;
    }

}