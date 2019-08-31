import {RequestService} from './request.service';
import {forwardRef, Module} from '@nestjs/common';
import {BookModule} from '../book/book.module';
import {RecipesModule} from '../recipes/recipes.module';
import {AuthorModule} from '../author/author.module';

@Module({
  imports: [
    forwardRef(() => BookModule),
    forwardRef(() => RecipesModule),
//    forwardRef(() => AuthorModule),
  ],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}
