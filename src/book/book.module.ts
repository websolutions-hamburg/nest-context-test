import {forwardRef, Module} from '@nestjs/common';
import {RecipesModule} from '../recipes/recipes.module';
import {BookResolver} from './book.resolver';
import {BookService} from './book.service';
import {RequestModule} from '../request/request.module';
import {AuthorModule} from '../author/author.module';
import {RequestService} from '../request/request.service';

@Module({
  imports: [
//    forwardRef(() => RequestModule),
    forwardRef(() => RecipesModule),
    forwardRef(() => AuthorModule),
  ],
  providers: [BookResolver, BookService, RequestService],
  exports: [BookService],
})
export class BookModule {}
