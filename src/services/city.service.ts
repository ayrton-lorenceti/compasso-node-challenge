import { Injectable } from '@nestjs/common';

import { City } from '../interfaces/city/city.interface';

@Injectable()
export class CityService {
  create(city: City) {
    return "";
  }

  getByName() {
    return "";
  }

  getByStateName() {
    return "";
  }
}
