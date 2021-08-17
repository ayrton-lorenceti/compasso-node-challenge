import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { CityService } from './services/city.service';
import { ClientService } from "./services/client.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
    })
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