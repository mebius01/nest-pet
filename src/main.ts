import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT);
  const prefix = process.env.PREFIX;

  app.setGlobalPrefix(prefix);
  await app.listen(port, () => Logger.log(`Server started on port:${port}`));
}
bootstrap();
