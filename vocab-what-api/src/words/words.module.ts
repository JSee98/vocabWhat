import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from './schema/word.schema';
import { WordResolver } from './words.resolver';
import { WordService } from './words.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  providers: [WordResolver, WordService],
})
export class WordsModule {}
