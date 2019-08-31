import {forwardRef, Module} from '@nestjs/common';
import {RecipesModule} from '../recipes/recipes.module';
import {BookResolver} from './book.resolver';
import {BookService} from './book.service';
import {AuthorModule} from '../author/author.module';
import {RequestService} from '../request/request.service';
import {HariboModule} from '../haribo/haribo.module';

@Module({
  imports: [
    forwardRef(() => RecipesModule),
    AuthorModule,
    HariboModule,
  ],
  providers: [BookResolver, BookService, RequestService],
  exports: [BookService],
})
export class BookModule {}
