import { UseGuards } from '@nestjs/common';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { ContextualRequest } from '../../Core/Decorator/ContextualRequest';
import GraphqlAuthGuard from '../../Core/Security/Guard/GraphqlAuthGuard';
import { ContextualGraphqlRequest } from '../../index';
import User from '../Entity/User';
import GetLoggedUserUseCase from '../UseCase/User/GetLoggedUser/GetLoggedUserUseCase';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveUserDto from "../UseCase/User/SaveUser/SaveUserDto";
import SaveUserUseCase from "../UseCase/User/SaveUser/SaveUserUseCase";

@Resolver(User)
export default class UserResolver {
  constructor(private readonly serviceFactory: UseCaseFactory) {}

  @UseGuards(GraphqlAuthGuard)
  @Query(() => User)
  async getLoggedUser(@ContextualRequest() context: ContextualGraphqlRequest) {
    return (await this.serviceFactory.create(GetLoggedUserUseCase)).handle(context);
  }

  @Mutation(() => User)
  async saveUser(@ContextualRequest() context: ContextualGraphqlRequest, @Args("dto") dto: SaveUserDto): Promise<User> {
    return (await this.serviceFactory.create(SaveUserUseCase)).handle(context, dto);
  }
}
