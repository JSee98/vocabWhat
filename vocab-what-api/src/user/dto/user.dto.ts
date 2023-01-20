import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('User')
export class UserDto {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  lastLogin: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
