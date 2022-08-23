import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const port = config.get('port');
  const prefix = config.get('prefix');

  app.setGlobalPrefix(prefix);
  await app.listen(port, () => Logger.log(`Server started on port:${port}`));
}
bootstrap();
