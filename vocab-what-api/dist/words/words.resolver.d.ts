import { CreateWordDto } from './dto/create.word.dto';
import { Word } from './schema/word.schema';
import { WordService } from './words.service';
export declare class WordResolver {
    private readonly wordService;
    constructor(wordService: WordService);
    getOneWordById(id: string): Promise<Word>;
    getAllWords(): Promise<Word[]>;
    getOneWordByWord(word: string): Promise<Word>;
    addOneWord(input: CreateWordDto): Promise<Word>;
}
