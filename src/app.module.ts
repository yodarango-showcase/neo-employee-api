import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/env';
import { EmployeeModule } from './employees/employee.module';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot(envs.mongoConnString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
