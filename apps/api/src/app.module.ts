import { Module } from "@nestjs/common";
import { AuthModule } from "@libs/auth";
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule]
})
export class AppModule {}
