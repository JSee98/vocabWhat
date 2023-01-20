import { NotFoundException } from '@nestjs/common';
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateWordDto } from './dto/create.word.dto';
import { Word } from './schema/word.schema';
import { WordService } from './words.service';

@Resolver((of) => Word)
export class WordResolver {
  constructor(private readonly wordService: WordService) {}

  @Query((returns) => Word)
  async getOneWordById(@Args('id') id: string): Promise<Word> {
    const word = await this.wordService.findOneById(id);
    return word;
  }

  @Query((returns) => [Word])
  async getAllWords(): Promise<Word[]> {
    return await this.wordService.findAll();
  }

  @Query((returns) => Word)
  async getOneWordByWord(@Args('word') word: string): Promise<Word> {
    return await this.wordService.findOneByWord(word);
  }

  @Mutation((returns) => Word)
  async addOneWord(@Args('input') input: CreateWordDto): Promise<Word> {
    return await this.wordService.createOneWord(input);
  }

  
}
