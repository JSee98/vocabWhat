import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWordDto {
  @Field(() => String, { description: 'Word to add' })
  word: string;

  @Field(() => String, { description: 'Meaning of the word' })
  meaning: string;

  @Field(() => [String], { description: 'Memonics for the word' })
  memonic: string[];
}
