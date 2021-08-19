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

  getByName(fullName: string): Promise<Client> {
    return this.clientRepository.findOne({ fullName });
  }

  async updateName(id: number, fullName: string) {
    const a = await this.clientRepository.update(id, { fullName });
    console.log(a);
    return a
    return this.clientRepository.update(id, { fullName });
  }

  delete() {
    return "";
  }
}
