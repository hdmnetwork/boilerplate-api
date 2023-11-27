import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../Core/Datasource/Prisma';

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
}
