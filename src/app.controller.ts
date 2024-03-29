import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/user')
  getUser(@Query('name') name: string) {
    return {
      code: 0,
      message: 'ok',
      data: {
        name: this.appService.setHi(name),
      },
    };
  }
}
