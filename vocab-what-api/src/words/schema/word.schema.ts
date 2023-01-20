import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type WordDocument = HydratedDocument<Word>;

@ObjectType()
@Schema()
export class Word {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'word in vocab' })
  word: string;

  @Prop()
  @Field(() => String, { description: 'meaning of the word' })
  meaning: string;

  @Prop()
  @Field(() => [String], { description: 'memonics for the word' })
  memonic: string[];
}

export const WordSchema = SchemaFactory.createForClass(Word);
