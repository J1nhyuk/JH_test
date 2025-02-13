import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';

@Controller('boards') // URL 경로: /boards
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 게시글 생성: POST /boards
  @Post()
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  // 모든 게시글 조회: GET /boards
  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardService.getBoards();
  }

  // 특정 게시글 조회: GET /boards/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Board> {
    return this.boardService.getBoardById(Number(id));
  }

  // 게시글 업데이트: PUT /boards/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: Partial<CreateBoardDto>,
  ): Promise<Board> {
    return this.boardService.updateBoard(Number(id), updateBoardDto);
  }

  // 게시글 삭제: DELETE /boards/:id
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.boardService.deleteBoard(Number(id));
  }
}