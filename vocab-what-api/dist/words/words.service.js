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
exports.WordService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const word_schema_1 = require("./schema/word.schema");
let WordService = class WordService {
    constructor(wordModel) {
        this.wordModel = wordModel;
    }
    async createOneWord(input) {
        try {
            const createdWord = await this.wordModel.create(input);
            return createdWord;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(`Failed creating new word with - ${e}`);
        }
    }
    async createManyWords(input) {
        try {
            const createdWord = await this.wordModel.create(input);
            return createdWord;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(`Failed creating new word with - ${e}`);
        }
    }
    async findAll() {
        const words = await this.wordModel.find().exec();
        if (words.length === 0) {
            throw new common_1.InternalServerErrorException('No words in system');
        }
        return words;
    }
    async findOneById(id) {
        const wordToRet = await this.wordModel.findOne({ _id: id }).exec();
        if (wordToRet === null) {
            throw new common_1.InternalServerErrorException(`No word found for id - ${id}`);
        }
        return wordToRet;
    }
    async findOneByWord(word) {
        const wordToRet = await this.wordModel.findOne({ word: word }).exec();
        if (wordToRet === null) {
            throw new common_1.InternalServerErrorException(`No word found for query - ${word}`);
        }
        return wordToRet;
    }
};
WordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(word_schema_1.Word.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WordService);
exports.WordService = WordService;
//# sourceMappingURL=words.service.js.map