import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Car {
  @Field(type => ID)
  id: string;

  @Field()
  color: string;

  @Field()
  recipeDescription: string;
}
