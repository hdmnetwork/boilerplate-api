import {Field, Int, ObjectType} from "@nestjs/graphql";
import User from "./User";
import Year from "./Year";

@ObjectType()
export default class Photo {
    @Field(() => Int)
    id: number;

    @Field()
    link: string;

    @Field(()=> User)
    user: User;

    @Field()
    comment: string;

    @Field(() => Year)
    year: Year;
}
