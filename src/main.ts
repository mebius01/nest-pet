import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { sessionConfig } from 'config/config.session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT);
  const prefix = process.env.PREFIX;

  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe());
  app.use(session({ ...sessionConfig }));
  app.use(passport.initialize());
  app.use(passport.session())
  await app.listen(port, () => Logger.log(`Server started on port:${port}`));
}
bootstrap();
