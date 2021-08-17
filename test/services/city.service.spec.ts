import { Test, TestingModule } from '@nestjs/testing';

import { CityService } from '../../src/services/city.service';

import { city } from "../mocks/services/city.mock";

describe('CityService', () => {
  let cityService: CityService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CityService],
    }).compile();

    cityService = app.get<CityService>(CityService);
  });

  it("Should create and return a new city", async () => {
    const response = await cityService.create(city);

    expect(response).toEqual(city);
  });

  it("Should return an error when city object is invalid", async () => {
    
  });
});
