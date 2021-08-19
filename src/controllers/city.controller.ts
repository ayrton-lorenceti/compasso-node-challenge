import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

import { CityService } from "../services/city.service";

import { City } from '../interfaces/city/city.interface';

@Controller("city")
export class CityController {
  constructor(
    private readonly cityService: CityService
  ) { }
  
  @Post()
  @HttpCode(201)
  create(@Body() city: City): Promise<City> {
    return this.cityService.create(city);
  }

  @Get(":name")
  @HttpCode(200)
  getByName(@Param("name") name: string): Promise<City> {
    return this.cityService.getByName(name);
  }
}
