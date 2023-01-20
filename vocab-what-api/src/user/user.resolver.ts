import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create.user.dto';
import { CreateUserResponseDto } from './dto/create.user.response.dto';
import { SingUpService } from './services/signup.service';
import { UserEntity } from './user.entity';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private readonly userSignupService: SingUpService) {}

  /*
    Creates one user in DB
  */
  @Mutation((returns) => CreateUserResponseDto)
  async createOneUser(
    @Args('input') input: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const userToRet =  await this.userSignupService.createUser(input);
    return userToRet;
  }
}
