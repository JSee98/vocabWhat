"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_user_dto_1 = require("./dto/create.user.dto");
const create_user_response_dto_1 = require("./dto/create.user.response.dto");
const signup_service_1 = require("./services/signup.service");
const user_entity_1 = require("./user.entity");
let UserResolver = class UserResolver {
    constructor(userSignupService) {
        this.userSignupService = userSignupService;
    }
    async createOneUser(input) {
        const userToRet = await this.userSignupService.createUser(input);
        return userToRet;
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => create_user_response_dto_1.CreateUserResponseDto),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createOneUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_entity_1.UserEntity),
    __metadata("design:paramtypes", [signup_service_1.SingUpService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map