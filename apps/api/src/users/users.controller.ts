import { Controller, Get, Post, Body, Patch, Param, Put, Query, UseInterceptors, Req } from '@nestjs/common';
import { UsersService } from './users.service';


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
        @Param("user_id") id: string,@Req() request: any
    ): Promise<any> {
        return await this.userService.fetchUser(id,request.username, request.tenant_id,request.app_id);
    }
}
