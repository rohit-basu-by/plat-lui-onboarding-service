import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { grpcClientOptions } from '../grpc-client.options';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}