export class CreateBoardDto {
    readonly title: string;
    readonly content: string;
    readonly author?: string; // 선택적 필드
  }