import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { Car } from './models/car';
import {CONTEXT} from '@nestjs/graphql';
import {RecipesService} from '../recipes/recipes.service';

@Injectable()
export class CarService {

  constructor(
      @Inject(CONTEXT)
      private readonly context: {request: Request},

      @Inject(forwardRef(() => RecipesService))
      private readonly roomService: RecipesService,
  ) {}

  async findOneById(id: string): Promise<Car> {
    return {} as any;
  }

  async findAll(): Promise<Car[]> {

    console.log(this.context)

    return [] as Car[];
  }
}
