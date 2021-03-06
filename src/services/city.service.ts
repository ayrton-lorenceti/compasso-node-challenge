import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { City as CityEntity }  from "../entities/city.entity";

import { ParserUtils } from "../utils/parser.utils";

import { City } from '../interfaces/city/city.interface';
import { InsertedCity } from '../interfaces/city/inserted-city.interface';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(newCity: City): Promise<InsertedCity> {
    newCity.uf = ParserUtils.parseUF(newCity.uf);

    const city = await this.getByName(newCity.name)
      .catch(error => { throw new InternalServerErrorException(error.message) });

    if (city)
      return city;
    
    return this.cityRepository
      .save(newCity)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  async getByName(name: string): Promise<InsertedCity> {
    return this.cityRepository
      .findOne({ name })
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  getByUF(cityName: string, uf: string): Promise<InsertedCity> {
    const city: City = {
      name: cityName,
      uf: ParserUtils.parseUF(uf)
    };

    return this.cityRepository
      .findOne({ name: city.name, uf: city.uf })
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }
}
