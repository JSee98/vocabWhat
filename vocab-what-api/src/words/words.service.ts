import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWordDto } from './dto/create.word.dto';
import { Word, WordDocument } from './schema/word.schema';

@Injectable()
export class WordService {
  constructor(
    @InjectModel(Word.name) private readonly wordModel: Model<WordDocument>,
  ) {}

  async createOneWord(input: CreateWordDto): Promise<Word> {
    try {
      const createdWord = await this.wordModel.create(input);
      return createdWord;
    } catch (e) {
      throw new InternalServerErrorException(
        `Failed creating new word with - ${e}`,
      );
    }
  }

  async createManyWords(input: [CreateWordDto]): Promise<Word[]> {
    try {
      const createdWord = await this.wordModel.create(input);
      return createdWord;
    } catch (e) {
      throw new InternalServerErrorException(
        `Failed creating new word with - ${e}`,
      );
    }
  }

  async findAll(): Promise<Word[]> {
    const words = await this.wordModel.find().exec();
    if (words.length === 0) {
      throw new InternalServerErrorException('No words in system');
    }
    return words;
  }

  async findOneById(id: string): Promise<Word> {
    const wordToRet = await this.wordModel.findOne({ _id: id }).exec();
    if (wordToRet === null) {
      throw new InternalServerErrorException(`No word found for id - ${id}`);
    }
    return wordToRet;
  }

  async findOneByWord(word: string): Promise<Word> {
    const wordToRet = await this.wordModel.findOne({ word: word }).exec();
    if (wordToRet === null) {
      throw new InternalServerErrorException(
        `No word found for query - ${word}`,
      );
    }
    return wordToRet;
  }
}
