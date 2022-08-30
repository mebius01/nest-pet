import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  get() {
    const version = process.env.npm_package_version;
    return { version };
  }
}
