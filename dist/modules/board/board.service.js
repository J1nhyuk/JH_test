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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_entity_1 = require("./board.entity");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    // 게시글 생성
    async createBoard(createBoardDto) {
        const board = this.boardRepository.create(createBoardDto);
        return await this.boardRepository.save(board);
    }
    // 모든 게시글 조회
    async getBoards() {
        return await this.boardRepository.find();
    }
    // ID로 특정 게시글 조회
    async getBoardById(id) {
        const board = await this.boardRepository.findOne({ where: { id } });
        if (!board) {
            throw new common_1.NotFoundException(`Board with id ${id} not found`);
        }
        return board;
    }
    // 게시글 업데이트
    async updateBoard(id, updateData) {
        const board = await this.getBoardById(id);
        Object.assign(board, updateData);
        return await this.boardRepository.save(board);
    }
    // 게시글 삭제
    async deleteBoard(id) {
        const result = await this.boardRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Board with id ${id} not found`);
        }
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], BoardService);
//# sourceMappingURL=board.service.js.map