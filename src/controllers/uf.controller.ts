import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

import { CityService } from "../services/city.service";

import { City } from '../interfaces/city/city.interface';

@Controller("uf")
export class UFController {
  constructor(
    private readonly cityService: CityService
  ) { }

  @Get(":uf/city/:name")
  @HttpCode(200)
  getByName(
    @Param("uf") uf: string,
    @Param("name") cityName: string
  ) {
    const city: City = {
      name: cityName,
      uf
    }

    return this.cityService.getByUF(city);
  }
}
