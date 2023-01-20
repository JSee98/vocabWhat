import { CreateUserDto } from './dto/create.user.dto';
import { CreateUserResponseDto } from './dto/create.user.response.dto';
import { SingUpService } from './services/signup.service';
export declare class UserResolver {
    private readonly userSignupService;
    constructor(userSignupService: SingUpService);
    createOneUser(input: CreateUserDto): Promise<CreateUserResponseDto>;
}
