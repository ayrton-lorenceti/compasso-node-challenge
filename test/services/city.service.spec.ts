import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityService } from '../../src/services/city.service';

import { City as CityEntity } from "../../src/entities/city.entity";

import { city } from "../mocks/services/city.mock";
import { insertedCity } from "../mocks/services/inserted-city.mock";

describe('CityService', () => {
  const CITY_NAME = "Chapecó";
  const mockRepository = {
    save: jest.fn().mockResolvedValueOnce(insertedCity),
    findOne: jest.fn().mockResolvedValue(insertedCity)
  }

  let cityService: CityService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: getRepositoryToken(CityEntity),
          useValue: mockRepository
        }
      ],
    }).compile();

    cityService = app.get<CityService>(CityService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  })

  it("Should create a new city", async () => {
    const response = await cityService.create(city);

    expect(response).toEqual(insertedCity);
  });

  it("Should return a city by name", async () => {
    const response = await cityService.getByName(CITY_NAME);

    expect(response).toEqual(insertedCity);
  });

  it("Should return a city by name and by state", async () => {
    const response = await cityService.getByUF(city);

    expect(response).toEqual(insertedCity);
  });
});
