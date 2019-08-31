import { Field, ID, ObjectType } from 'type-graphql';
import {Recipe} from '../../recipes/models/recipe';
import {Author} from '../../author/models/author';
import {HariboModel} from '../../haribo/models/haribo.model';

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

  @Field(type => HariboModel)
  haribo: HariboModel;
}
