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

  @Get(":cityName")
  @HttpCode(200)
  getByName(@Param("cityName") cityName: string) {
    return this.cityService.getByName(cityName);
  }
}
