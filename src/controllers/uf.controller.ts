import { Controller, Get, HttpCode, Param } from '@nestjs/common';

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
    @Param("name") cityName: string,
    @Param("uf") uf: string,
  ): Promise<City> {
    return this.cityService.getByUF(cityName, uf);
  }
}
