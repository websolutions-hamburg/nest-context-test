import {forwardRef, Module} from '@nestjs/common';
import {TestService} from './test.service';
import {TestResolver} from './test.resolver';
import {RequestService} from '../request/request.service';
import {BookModule} from '../book/book.module';
import {RecipesModule} from '../recipes/recipes.module';

@Module({
    imports: [
      forwardRef(() => BookModule),
    ],
    providers: [TestService, TestResolver, RequestService],
    exports: [TestService],
})
export class TestModule {}
