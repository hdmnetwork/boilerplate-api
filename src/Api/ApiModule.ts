import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { S3Module } from 'nestjs-s3';
import CoreModule from '../Core/CoreModule';
import GraphqlModule from '../Core/GraphqlModule';
import UserModule from './User/UserModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CoreModule,
    EventEmitterModule.forRoot({ wildcard: true }),
    GraphqlModule,
    HttpModule,
    S3Module.forRoot({
      config: {
        credentials: {
          accessKeyId: process.env.CDN_ACCESS_KEY_ID,
          secretAccessKey: process.env.CDN_ACCESS_KEY,
        },
        endpoint: process.env.CDN_PUBLIC_URL,
        forcePathStyle: true
      }
    }),
    UserModule
  ],
  controllers: [],
  providers: [
  ]
})
export class ApiModule {}
