import { Injectable } from '@nestjs/common';
import ServiceFactory from '../../../Core/Factory/ServiceFactory';
import GetLoggedUserUseCase from './GetLoggedUser/GetLoggedUserUseCase';

type UseCases = GetLoggedUserUseCase;
@Injectable()
export default class UserUseCaseFactory extends ServiceFactory<UseCases> {}
