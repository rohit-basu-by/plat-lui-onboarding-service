import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import {
    ClientGrpc,
    GrpcMethod,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserById } from './interfaces/users-by-id.interface';
import { User } from './interfaces/user.interface';

interface UsersService {
    findOne(data: UserById): Observable<User>;
}

@Controller('users')
export class UsersController implements OnModuleInit {
    private heroService: UsersService;
    constructor(@Inject('USERS_PACKAGE') private readonly client: ClientGrpc) { }
    onModuleInit() {
        this.heroService = this.client.getService<UsersService>('UsersService');
    }

    @GrpcMethod('UsersService')
    findOne(data: UserById): User {
        return null;
    }
}
