import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create.user.dto';
import { CreateUserResponseDto } from '../dto/create.user.response.dto';
import { UserEntity } from '../user.entity';
export declare class SingUpService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(input: CreateUserDto): Promise<CreateUserResponseDto>;
}
