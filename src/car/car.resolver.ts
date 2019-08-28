import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Car } from './models/car';
import { CarService } from './car.service';

const pubSub = new PubSub();

@Resolver(of => Car)
export class CarResolver {

  constructor(private readonly carService: CarService) {}

  @Query(returns => Car)
  async car(@Args('id') id: string): Promise<Car> {
    const car = await this.carService.findOneById(id);
    if (!car) {
      throw new NotFoundException(id);
    }
    return car;
  }

  @Query(returns => [Car])
  cars(): Promise<Car[]> {
    return this.carService.findAll();
  }
}
