import {forwardRef, Module} from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import {CarModule} from '../car/car.module';

@Module({
  imports: [
    forwardRef(() => CarModule),
  ],
  providers: [RecipesResolver, RecipesService, DateScalar],
  exports: [RecipesService],
})
export class RecipesModule {}
