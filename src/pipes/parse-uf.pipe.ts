import { 
  PipeTransform, 
  Injectable, 
  BadRequestException } from '@nestjs/common';

import { City } from '../entities/city.entity';

import { UF } from "../interfaces/city/uf.enum";

@Injectable()
export class ParseUFPipe implements PipeTransform {
  transform(city: City) {
    city.uf = UF[city.uf];

    if (!city.uf)
      throw new BadRequestException('Invalid UF.');

    return city;
  }
}