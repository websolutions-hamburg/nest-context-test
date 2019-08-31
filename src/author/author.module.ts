import {forwardRef, Module} from '@nestjs/common';
import {AuthorService} from './author.service';
import {AuthorResolver} from './author.resolver';
import {BookModule} from '../book/book.module';
import {RecipesModule} from '../recipes/recipes.module';
import {RequestService} from '../request/request.service';
import {TestModule} from '../test/test.module';

@Module({
  imports: [
    forwardRef(() => TestModule),
  ],
  providers: [AuthorResolver, AuthorService, RequestService],
  exports: [AuthorService],
})
export class AuthorModule {}
