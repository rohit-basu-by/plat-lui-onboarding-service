import { Module } from "@nestjs/common";
import { AuthModule } from "@libs/auth";
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [AuthModule, DemoModule]
})
export class AppModule {}
