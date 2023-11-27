import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { ContextualRequest } from '../../../Core/Decorator/ContextualRequest';
import GraphqlAuthGuard from '../../../Core/Security/Guard/GraphqlAuthGuard';
import { ContextualGraphqlRequest } from '../../../index';
import User from '../Entity/User';
import GetLoggedUserUseCase from '../UseCase/GetLoggedUser/GetLoggedUserUseCase';
import UserUseCaseFactory from '../UseCase/UserUseCaseFactory';

@Resolver(User)
export default class UserResolver {
  constructor(private readonly serviceFactory: UserUseCaseFactory) {}

  @UseGuards(GraphqlAuthGuard)
  @Query(() => User)
  async getLoggedUser(@ContextualRequest() context: ContextualGraphqlRequest) {
    return (await this.serviceFactory.create(GetLoggedUserUseCase)).handle(context);
  }
}
