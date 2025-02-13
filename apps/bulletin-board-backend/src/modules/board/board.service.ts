import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  // 게시글 생성
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create(createBoardDto);
    return await this.boardRepository.save(board);
  }

  // 모든 게시글 조회
  async getBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  // ID로 특정 게시글 조회
  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
    return board;
  }

  // 게시글 업데이트
  async updateBoard(id: number, updateData: Partial<CreateBoardDto>): Promise<Board> {
    const board = await this.getBoardById(id);
    Object.assign(board, updateData);
    return await this.boardRepository.save(board);
  }

  // 게시글 삭제
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Board with id ${id} not found`);
    }
  }
}