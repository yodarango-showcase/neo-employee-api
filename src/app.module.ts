// nest
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// modules
import { EmployeeModule } from './employees/employee.module';

// controllers/ services
import { AppController } from './app.controller';
import { AppService } from './app.service';

//env
import { envs } from './config/env';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot(envs.mongoConnString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
