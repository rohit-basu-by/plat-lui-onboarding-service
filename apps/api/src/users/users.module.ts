import { Module, HttpModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantContextSchema } from './tenant.schema';
import { UserCollabService } from './users.collab.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TenantContext', schema: TenantContextSchema},{ name: 'User', schema: UserSchema }
    ]),HttpModule
  ], 
  controllers: [UsersController],
  providers: [UsersService,UserCollabService]
})
export class UsersModule {}
