import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 글로벌 유효성 검사 파이프 (DTO 유효성 검증을 위해)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();