import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// modules
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger config
  const options = new DocumentBuilder()
    .setTitle('Neo Employee API')
    .setDescription('Employee management API for Neo fictitius company')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // validation pipe configurataion
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
