import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'USERS_PACKAGE', 
    protoPath: join(__dirname, './users/user.proto'), 
  },
};