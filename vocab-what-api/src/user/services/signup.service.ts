import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create.user.dto';
import { CreateUserResponseDto } from '../dto/create.user.response.dto';
import { UserEntity } from '../user.entity';

@Injectable()
export class SingUpService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(input: CreateUserDto): Promise<CreateUserResponseDto> {
    if (input.email === '') {
      throw new BadRequestException('Missing email for user');
    }
    try {
      const userCreationResponse = await this.userRepository
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values({
          email: input.email,
        })
        .execute();

      return {
        createdUser: true,
      };
    } catch (e) {
      throw new InternalServerErrorException(
        `Failed creating user with - ${e}`,
      );
    }
  }
}
