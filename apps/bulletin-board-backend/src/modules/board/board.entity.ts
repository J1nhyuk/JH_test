import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity() // 테이블로 매핑됨
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  author: string;

  @CreateDateColumn() // 자동 생성일자
  createdAt: Date;

  @UpdateDateColumn() // 자동 업데이트일자
  updatedAt: Date;
}