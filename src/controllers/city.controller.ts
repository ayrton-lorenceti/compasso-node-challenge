import { Controller, Get, HttpCode, Post } from '@nestjs/common';

import { CityService } from "../services/city.service";

@Controller()
export class CityController {
  constructor(private readonly cityService: CityService) { }
  
  @Post()
  @HttpCode(201)
  create() {
    return this.cityService.create();
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
