import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Author {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}
