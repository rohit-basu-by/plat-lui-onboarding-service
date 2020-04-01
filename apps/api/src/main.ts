import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AADAuthGaurd } from "@libs/auth/auth.guard";
import { grpcClientOptions } from "./grpc-client.options";
import { MicroserviceOptions } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AADAuthGaurd(new Reflector()));
  await app.listen(80);
}
bootstrap();
