import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export default class Year {
    @Field(() => Int)
    id: number;

    @Field()
    year: string;

    @Field()
    current: boolean;
}
