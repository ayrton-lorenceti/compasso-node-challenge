import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from "./controllers/city.controller";
import { ClientController } from "./controllers/client.controller";

import { CityService } from './services/city.service';
import { ClientService } from "./services/client.service";

import { City }  from "./entities/city.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([City]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
      charset: "utf8"
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