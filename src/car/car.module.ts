import {forwardRef, Module} from '@nestjs/common';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';
import {RecipesModule} from '../recipes/recipes.module';

@Module({
  imports: [
    forwardRef(() => RecipesModule),
  ],
  providers: [CarResolver, CarService],
})
export class CarModule {}
