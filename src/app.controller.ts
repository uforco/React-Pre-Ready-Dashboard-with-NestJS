import { Controller, Get, Res } from '@nestjs/common';

import { Response } from 'express';
import { AppService } from './app.service';
import app from './views/app';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(@Res() res: Response) {
    const html = app(Home);
    res.send('<!DOCTYPE html>' + html);
  }

  @Get('/about')
  getAbout(@Res() res: Response) {
    const html = app(About);
    res.send('<!DOCTYPE html>' + html);
  }

  @Get('/services')
  getServices(@Res() res: Response) {
    const html = app(Services);
    res.send('<!DOCTYPE html>' + html);
  }

  @Get('/contact')
  getContact(@Res() res: Response) {
    const html = app(Contact); // Assuming you want to use the Services view for contact as well
    res.send('<!DOCTYPE html>' + html);
  }
}
