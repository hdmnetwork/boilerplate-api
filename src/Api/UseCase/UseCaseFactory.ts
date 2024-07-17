import { Injectable } from '@nestjs/common';
import ServiceFactory from '../../Core/Factory/ServiceFactory';
import { AvailableUserUseCases } from "./User/AvailableUserUseCases";
import { AvailablePasswordRecoveryUseCases } from "./User/RecoveryPassword/AvailablePasswordRecoveryUseCases";

type UseCases = AvailableUserUseCases | AvailablePasswordRecoveryUseCases;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
