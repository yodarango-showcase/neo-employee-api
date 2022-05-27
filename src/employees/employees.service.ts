import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/employee.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }
}
