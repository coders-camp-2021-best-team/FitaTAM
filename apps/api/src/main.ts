import {
    ClassSerializerInterceptor,
    Logger,
    ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app';
import { ConfigService } from './config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const env = app.get(ConfigService);

    app.enableCors({
        origin: [env.CLIENT_URL],
        credentials: true,
    });

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector))
    );

    app.setGlobalPrefix('/api');

    const config = new DocumentBuilder()
        .setTitle('FitaTAM API Docs')
        .addCookieAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(env.PORT);
    Logger.log(`🚀 Application is running`);
}

bootstrap();
