import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('AppController')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Hello' })
  @Get()
  getHello(@Headers() headers): string {
    return this.appService.getHello();
  }
}
