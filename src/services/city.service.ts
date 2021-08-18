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

  create(city: City): Promise<City> {
    return this.cityRepository.save(city);
  }

  getByName(name: string): Promise<City> {
    return this.cityRepository.findOne({ name });
  }

  getByUF(city: City): Promise<City> {
    return this.cityRepository.findOne({ name: city.name, uf: city.uf });
  }
}
