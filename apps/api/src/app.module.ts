import { Module } from "@nestjs/common";
import { AuthModule } from "@libs/auth";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
const PROD_ENV = 'production';
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      ignoreEnvFile: process.env.NODE_ENV === PROD_ENV
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule
  ],
})
export class AppModule {}
