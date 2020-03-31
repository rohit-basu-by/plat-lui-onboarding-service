import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AADAuthGaurd } from "@libs/auth/auth.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error", "warn", "debug", "verbose"]
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AADAuthGaurd(new Reflector()));
  await app.listen(80);
}
bootstrap();
