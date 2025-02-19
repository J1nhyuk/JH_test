"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // 글로벌 유효성 검사 파이프 (DTO 유효성 검증을 위해)
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
    console.log('Application is running on: http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map