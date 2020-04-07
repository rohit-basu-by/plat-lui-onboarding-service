import { Controller, Get, Post, Body, Patch, Param, Put, Query, UseInterceptors, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    // @Post()
    // async create(@Body() user: CreateUserDto): Promise<CreateUserResponse> {
    //     const _id = await this.userService.createUser(user)
    //     return {
    //         _id
    //     }
    // }

    @Get('/:user_id')
    async fetchUserContext(
        @Param("user_id") id: string,
        @Headers() headers: any
    ): Promise<User> {
        return await this.userService.fetchUser(id,headers['x-username'], headers['x-tenantid'],headers['x-appid']);
    }
}
