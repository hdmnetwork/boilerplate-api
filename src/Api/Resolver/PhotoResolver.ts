import {Query, Resolver} from "@nestjs/graphql";
import Photo from "../Entity/Photo";
import UseCaseFactory from "../UseCase/UseCaseFactory";
import {UseGuards} from "@nestjs/common";
import GraphqlAuthGuard from "../../Core/Security/Guard/GraphqlAuthGuard";
import {ContextualGraphqlRequest} from "../../index";
import GetAllPhotoUseCase from "../UseCase/Photo/GetAllPhoto/GetAllPhotoUseCase";
import {ContextualRequest} from "../../Core/Decorator/ContextualRequest";

@Resolver(Photo)
export default class PhotoResolver {
    constructor(
        private readonly serviceFactory: UseCaseFactory
    ) {
    }

    @UseGuards(GraphqlAuthGuard)
    @Query(() => [Photo])
    async getAllPhotos(@ContextualRequest() context: ContextualGraphqlRequest) {
        return (await this.serviceFactory.create(GetAllPhotoUseCase)).handle(context);
    }
}
