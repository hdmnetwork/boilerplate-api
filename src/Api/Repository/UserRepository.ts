import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../Core/Datasource/Prisma';
import SaveUserDto from "../UseCase/User/SaveUser/SaveUserDto";
import {ContextualGraphqlRequest} from "../../index";

@Injectable()
export default class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async saveUser(context: ContextualGraphqlRequest, dto: SaveUserDto) {
    if(!dto.id) {
      return this.prisma.user.create({
        data: {
          email: dto.email,
          password: dto.password,
          firstName: dto.firstName,
          lastName: dto.lastName,
        }
      })
    }

    return this.prisma.user.update({
      where: {id: dto.id},
      data: {
        email: dto.email,
        password: dto.password,
        firstName: dto.firstName,
        lastName: dto.lastName,
      }
    })
  }
}
