import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class CityController {
  constructor() { }

  @Post()
  create() {
    return "";
  }

  @Get()
  getByName() {
    return "";
  }

  @Get()
  getByStateName() {
    return "";
  }
}
