import { Module, HttpModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ]),HttpModule
  ], 
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
