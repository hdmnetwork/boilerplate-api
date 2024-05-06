import { ForbiddenException, Injectable} from "@nestjs/common";
import {ContextualGraphqlRequest, UseCase} from "../../../../index";
import User from "src/Api/Entity/User"
import UserRepository from "../../../Repository/UserRepository";
import SaveUserDto from "./SaveUserDto";

@Injectable()
export default class SaveUserUseCase implements UseCase<Promise<User>, [dto: SaveUserDto]> {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async handle(context: ContextualGraphqlRequest, dto: SaveUserDto): Promise<User> {
        try {
            if( context.userId && context.userId !== dto.id ) {
               throw new ForbiddenException("Not authorized");
            }

            if( dto.id && context.userId === dto.id ) {
                return await this.userRepository.saveUser(context, dto);
            }

            return await this.userRepository.saveUser(context, dto);
        } catch (error) {
            throw new ForbiddenException(error.message);
        }
    }
}
