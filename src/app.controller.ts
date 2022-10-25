import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { forceSimulation } from 'd3-force';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const simulation = forceSimulation([]);

    return this.appService.getHello();
  }
}
