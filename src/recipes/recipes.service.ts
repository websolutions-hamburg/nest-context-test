import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe';
import {RequestService} from '../request/request.service';
import {BookService} from '../book/book.service';
import {AuthorService} from '../author/author.service';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  constructor(
      @Inject(forwardRef(() => RequestService))
      private readonly requestService: RequestService,

      @Inject(forwardRef(() => BookService))
      private readonly bookService: BookService,

//      @Inject(forwardRef(() => AuthorService))
//      private readonly authorService: AuthorService,
  ) {}

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs?: RecipesArgs): Promise<Recipe[]> {
    console.log('Request available in recipe service:', this.requestService.isAvailable());
    return [{id: '1'}] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }

  async getColor(): Promise<string> {
    const book = await this.bookService.findOneById('1');
    return book.color;
  }
}
