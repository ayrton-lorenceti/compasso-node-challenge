import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { City } from '../interfaces/city/city.interface';
import { City as CityEntity }  from "../entities/city.entity";

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(newCity: City): Promise<City> {
    const city = await this.getByName(newCity.name);

    if (city)
      return city;
    
    return this.cityRepository.save(newCity);
  }

  async getByName(name: string): Promise<City> {
    return this.cityRepository.findOne({ name });
  }

  getByUF(city: City): Promise<City> {
    return this.cityRepository.findOne({ name: city.name, uf: city.uf });
  }
}
