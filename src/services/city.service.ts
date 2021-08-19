import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { City as CityEntity }  from "../entities/city.entity";

import { ParserUtils } from "../utils/parser.utils";

import { City } from '../interfaces/city/city.interface';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(newCity: City): Promise<City> {
    newCity.uf = ParserUtils.parseUF(newCity.uf);

    const city = await this.getByName(newCity.name);

    if (city)
      return city;
    
    return this.cityRepository.save(newCity);
  }

  async getByName(name: string): Promise<City> {
    return this.cityRepository.findOne({ name });
  }

  getByUF(cityName: string, uf: string): Promise<City> {
    const city: City = {
      name: cityName,
      uf: ParserUtils.parseUF(uf)
    };

    return this.cityRepository.findOne({ name: city.name, uf: city.uf });
  }
}
