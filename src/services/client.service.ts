import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Client as ClientEntity } from "../entities/client.entity";

import { Client } from "../interfaces/client/client.interface";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  create(client: Client): Promise<Client> {
    return this.clientRepository
      .save(client)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  getById(id: number): Promise<Client> {
    return this.clientRepository
      .findOne(id)
      .catch(error => { throw new InternalServerErrorException(error.message) });
  }

  getByName(fullName: string): Promise<Client> {
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
