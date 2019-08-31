import { Field, ID, ObjectType } from 'type-graphql';
import {Recipe} from '../../recipes/models/recipe';

@ObjectType()
export class Book {
  @Field(type => ID)
  id: string;

  @Field()
  color: string;

  @Field(type => [Recipe])
  recipes: Recipe[];

//  @Field(type => Author)
//  author: Author;
}
