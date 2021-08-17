import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { CityService } from './services/city.service';
import { ClientService } from "./services/client.service";

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // })
    ConfigModule.forRoot()
  ],
  controllers: [
    CityController, 
    ClientController
  ],
  providers: [
    CityService,
    ClientService
  ],
})

export class AppModule {}