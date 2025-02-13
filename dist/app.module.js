"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_module_1 = require("./modules/board/board.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres', // 데이터베이스 종류: PostgreSQL
                host: 'localhost', // PostgreSQL 서버 주소
                port: 5432, // 기본 포트 번호
                username: 'jinhyuk', // PostgreSQL 사용자 이름 (자신의 환경에 맞게 변경)
                password: 'jinhyuk', // PostgreSQL 사용자 비밀번호 (환경에 맞게 변경)
                database: 'my_database', // 위에서 생성한 데이터베이스 이름
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true, // 엔티티와 데이터베이스 스키마를 동기화 (개발 중에는 true, 프로덕션에서는 false 권장)
            }),
            board_module_1.BoardModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map