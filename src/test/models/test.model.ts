import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class TestModel {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    authorName: string;
}
