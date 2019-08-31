import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {BookModule} from './book/book.module';
import { RecipesModule } from './recipes/recipes.module';
import {TestModule} from './test/test.module';
import {AuthorModule} from './author/author.module';
import {HariboModel} from './haribo/models/haribo.model';

@Module({
  imports: [
    BookModule,
    RecipesModule,
    TestModule,
    AuthorModule,
    HariboModel,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({req}) => ({request: req}),
    }),
  ],
})
export class ApplicationModule {}
