import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CreateUserResponseDto {
  @Field()
  createdUser?: boolean;
}
