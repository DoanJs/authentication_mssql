import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.PATH_ORIGIN,
    credentials: true,
  });

  app.use(cookieParser());

  app.use((req: Request, res: Response, next: NextFunction) => {
    next();
  });

  await app.listen(5000);

  Logger.log(`Server is running at http://localhost:${5000}/graphql`, 'Js');
}
bootstrap();
