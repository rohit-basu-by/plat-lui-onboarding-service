import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import azureB2cConfig from "./azure.b2c.config";
import { AzureB2cStrategy } from "./auth.strategy";

@Module({
  imports: [ConfigModule.forFeature(azureB2cConfig), PassportModule],
  providers: [AuthService, AzureB2cStrategy],
  exports: [AuthService, AzureB2cStrategy]
})
export class AuthModule {}
