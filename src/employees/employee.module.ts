import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesConroller } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesConroller],
  providers: [EmployeesService],
})
export class EmployeeModule {}
