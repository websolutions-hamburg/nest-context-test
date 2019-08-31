import {forwardRef, Module} from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import {BookModule} from '../book/book.module';
import {AuthorModule} from '../author/author.module';
import {RequestService} from '../request/request.service';

@Module({
  imports: [
    forwardRef(() => BookModule),
  ],
  providers: [RecipesResolver, RecipesService, DateScalar, RequestService],
  exports: [RecipesService],
})
export class RecipesModule {}
