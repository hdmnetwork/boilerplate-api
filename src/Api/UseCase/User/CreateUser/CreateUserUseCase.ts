import { Injectable } from "@nestjs/common";
import SaveUserDto from "../SaveUser/SaveUserDto";
import User from "../../../Entity/User";
import { UncontextualUseCase } from "../../../../index";
import UserRepository from "../../../Repository/UserRepository";

@Injectable()
export default class CreateUserUseCase implements UncontextualUseCase<Promise<User>, [dto: SaveUserDto]> {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async handle(dto: SaveUserDto): Promise<User> {
        if (!dto.id) {
            return this.userRepository.createUser(dto);
        }
    }
}
