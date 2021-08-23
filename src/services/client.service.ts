import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { City as CityEntity } from "../entities/city.entity";
import { Client as ClientEntity } from "../entities/client.entity";

import { Client } from "../interfaces/client/client.interface";
import { InsertedClient } from '../interfaces/client/inserted-client.interface';
import { PreInsertedClient } from '../interfaces/client/pre-inserted-client.interface';
import { ReceivedClient } from '../interfaces/client/received-client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(receivedClient: ReceivedClient): Promise<InsertedClient> {
    const city = await this.cityRepository.findOne(receivedClient.cityId)
      .catch(error => { throw new BadRequestException(error.message) }); 

    if (!city)
      throw new BadRequestException("Invalid city id.");

    const preInsertedClient = this.getPreInsertedClient(receivedClient, city)

    return this.clientRepository
      .save(preInsertedClient)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  private getPreInsertedClient(receivedClient: ReceivedClient, city: CityEntity): PreInsertedClient {
    const {age, birthDate, fullName, sex } = receivedClient;

    return {
      age,
      birthDate: new Date(birthDate),
      fullName,
      sex,
      city
    }
  }

  getById(id: number): Promise<InsertedClient> {
    return this.clientRepository
      .findOne(id)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  getByName(fullName: string): Promise<InsertedClient> {
    return this.clientRepository
      .findOne({ fullName })
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  updateName(id: number, fullName: string) {
    return this.clientRepository
      .update(id, { fullName })
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  delete(id: number) {
    return this.clientRepository
      .delete(id)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }
}
