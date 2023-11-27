import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CoreModule from '../../Core/CoreModule';
import UserRepository from './Repository/UserRepository';
import UserResolver from './Resolver/UserResolver';
import UserUseCaseFactory from './UseCase/UserUseCaseFactory';

@Module({
  imports: [CoreModule, ConfigModule],
  exports: [
    UserRepository
  ],
  providers: [
    UserResolver,
    UserRepository,
    UserUseCaseFactory
  ]
})
export default class UserModule {}
