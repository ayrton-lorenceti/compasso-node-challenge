import { Injectable } from '@nestjs/common';
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
    return this.clientRepository.save(client);
  }

  getById(id: number): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  getByName() {
    return "";
  }

  updateName() {
    return "";
  }

  delete() {
    return "";
  }
}
