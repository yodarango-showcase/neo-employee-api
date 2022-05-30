// nest
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// modules
import { EmployeeModule } from './employees/employee.module';

// controllers/ services
import { AppController } from './app.controller';
import { AppService } from './app.service';

//env
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmployeeModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
