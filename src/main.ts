import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';

import * as bodyParser from 'body-parser';
const port = process.env.SERVER_PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.enableCors({
    origin: '*',
  });
  await app.listen(port);
  console.log(`====>App started in port ${port}<====`);
}
bootstrap();
