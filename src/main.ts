import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Backend на NestJs')
        .setDescription('Документация по REST API')
        .setVersion('1.0.0')
        .addTag('Chopsqd')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port: ${PORT}...`))
}

start()