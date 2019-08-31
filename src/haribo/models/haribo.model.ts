import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class HariboModel {
    @Field()
    id: string;

    @Field()
    name: string;

//    @Field()
//    bookColor: string;
}
