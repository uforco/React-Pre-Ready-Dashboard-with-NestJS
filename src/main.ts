import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { join } from 'path';
import * as express from 'express';
import * as livereload from 'livereload';
import connectLivereload from 'connect-livereload';

async function bootstrap() {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(join(__dirname, '..', 'public'));
  liveReloadServer.watch(join(__dirname, 'views'));

  // 👇 Patch for livereload to force refresh
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => liveReloadServer.refresh('/'), 100);
  });

  const app = await NestFactory.create(AppModule);

  app.use(connectLivereload());

  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
