import {forwardRef, Module} from '@nestjs/common';
import {RequestService} from '../request/request.service';
import {HariboService} from './haribo.service';
import {HariboResolver} from './haribo.resolver';
import {BookModule} from '../book/book.module';
import {RecipesModule} from '../recipes/recipes.module';

@Module({
    imports: [
//        forwardRef(() => BookModule),
    ],
    providers: [HariboService, HariboResolver, RequestService],
    exports: [HariboService],
})
export class HariboModule {}
