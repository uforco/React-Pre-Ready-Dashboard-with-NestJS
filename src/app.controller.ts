import { Controller, Get, Res } from '@nestjs/common';

import { Response } from 'express';
import { AppService } from './app.service';
import app from './views/app';
import Home from './views/Home';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const html = app(Home);
    res.send('<!DOCTYPE html>' + html);
  }

  @Get('/user')
  getUser() {
    return ['sharif', 'khan', 'sajid'];
  }
}
