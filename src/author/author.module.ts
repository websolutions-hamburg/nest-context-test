import {forwardRef, Module} from '@nestjs/common';
import {AuthorService} from './author.service';
import {AuthorResolver} from './author.resolver';
import {RequestModule} from '../request/request.module';
import {BookModule} from '../book/book.module';
import {RecipesModule} from '../recipes/recipes.module';
import {RequestService} from '../request/request.service';

@Module({
  imports: [
//    forwardRef(() => RequestModule),
    forwardRef(() => BookModule),
//    forwardRef(() => RecipesModule),
    RecipesModule,
  ],
  providers: [AuthorResolver, AuthorService, RequestService],
  exports: [AuthorService],
})
export class AuthorModule {}
