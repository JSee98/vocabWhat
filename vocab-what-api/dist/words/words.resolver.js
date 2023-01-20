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
exports.WordResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_word_dto_1 = require("./dto/create.word.dto");
const word_schema_1 = require("./schema/word.schema");
const words_service_1 = require("./words.service");
let WordResolver = class WordResolver {
    constructor(wordService) {
        this.wordService = wordService;
    }
    async getOneWordById(id) {
        const word = await this.wordService.findOneById(id);
        return word;
    }
    async getAllWords() {
        return await this.wordService.findAll();
    }
    async getOneWordByWord(word) {
        return await this.wordService.findOneByWord(word);
    }
    async addOneWord(input) {
        return await this.wordService.createOneWord(input);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => word_schema_1.Word),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "getOneWordById", null);
__decorate([
    (0, graphql_1.Query)((returns) => [word_schema_1.Word]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "getAllWords", null);
__decorate([
    (0, graphql_1.Query)((returns) => word_schema_1.Word),
    __param(0, (0, graphql_1.Args)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "getOneWordByWord", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => word_schema_1.Word),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_word_dto_1.CreateWordDto]),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "addOneWord", null);
WordResolver = __decorate([
    (0, graphql_1.Resolver)((of) => word_schema_1.Word),
    __metadata("design:paramtypes", [words_service_1.WordService])
], WordResolver);
exports.WordResolver = WordResolver;
//# sourceMappingURL=words.resolver.js.map