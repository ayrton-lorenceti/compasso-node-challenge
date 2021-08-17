import { Controller, Get, HttpCode, Post } from '@nestjs/common';

import { CityService } from "../services/city.service";

import { City } from '../interfaces/city/city.interface';

@Controller("city")
export class CityController {
  constructor(
    private readonly cityService: CityService
  ) { }
  
  @Post()
  @HttpCode(201)
  create(city: City) {
    return this.cityService.create(city);
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
