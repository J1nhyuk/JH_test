import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './modules/board/board.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',            // 데이터베이스 종류: PostgreSQL
      host: 'localhost',           // PostgreSQL 서버 주소
      port: 5432,                  // 기본 포트 번호
      username: 'jinhyuk',        // PostgreSQL 사용자 이름 (자신의 환경에 맞게 변경)
      password: 'jinhyuk',   // PostgreSQL 사용자 비밀번호 (환경에 맞게 변경)
      database: 'my_database',     // 위에서 생성한 데이터베이스 이름
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,           // 엔티티와 데이터베이스 스키마를 동기화 (개발 중에는 true, 프로덕션에서는 false 권장)
    }),
    BoardModule,
  ],
})
export class AppModule {}