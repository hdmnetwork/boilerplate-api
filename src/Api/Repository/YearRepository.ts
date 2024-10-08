import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../Core/Datasource/Prisma";

@Injectable()
export default class YearRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {
    }

    async getAllYears() {
        return this.prisma.year.findMany();
    }

    async getCurrentYear() {
        return this.prisma.year.findFirst({
            where: {current: true}
        })
    }
}
