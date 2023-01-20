import { Model } from 'mongoose';
import { CreateWordDto } from './dto/create.word.dto';
import { Word, WordDocument } from './schema/word.schema';
export declare class WordService {
    private readonly wordModel;
    constructor(wordModel: Model<WordDocument>);
    createOneWord(input: CreateWordDto): Promise<Word>;
    createManyWords(input: [CreateWordDto]): Promise<Word[]>;
    findAll(): Promise<Word[]>;
    findOneById(id: string): Promise<Word>;
    findOneByWord(word: string): Promise<Word>;
}
