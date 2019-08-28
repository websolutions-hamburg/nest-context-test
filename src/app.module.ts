import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import {CarModule} from './car/car.module';

@Module({
  imports: [
    RecipesModule,
    CarModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({req}) => ({request: req}),
    }),
  ],
})
export class ApplicationModule {}
