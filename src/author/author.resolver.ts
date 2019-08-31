import { NotFoundException } from '@nestjs/common';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {AuthorService} from './author.service';
import {Author} from './models/author';

@Resolver(of => Author)
export class AuthorResolver {

  constructor(
      private readonly authorService: AuthorService,
  ) {}

  @Query(returns => Author)
  async author(@Args('id') id: string): Promise<Author> {
    const author = await this.authorService.findOneById(id);
    if (!author) {
      throw new NotFoundException(id);
    }
    return author;
  }

  @Query(returns => [Author])
  authors(): Promise<Author[]> {
    return this.authorService.findAll();
  }
}
