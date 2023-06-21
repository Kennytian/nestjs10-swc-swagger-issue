import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Api Title')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);

  console.log(
    `api service listening at http://127.0.0.1:3000/api, the time now: ${new Date().toLocaleString()}`,
  );
}
bootstrap();
