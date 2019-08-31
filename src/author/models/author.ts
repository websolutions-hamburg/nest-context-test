import { Field, ID, ObjectType } from 'type-graphql';
import {TestModel} from '../../test/models/test.model';

@ObjectType()
export class Author {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => TestModel)
  testName: string;
}
