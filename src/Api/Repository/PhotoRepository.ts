import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../Core/Datasource/Prisma";

@Injectable()
export default class PhotoRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async getAllPhotos() {
        return this.prisma.photo.findMany({
            include: {
                user: true,
                year: true,
            }
            });
    }
}