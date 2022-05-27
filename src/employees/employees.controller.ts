import { Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './interfaces/employee.interface';

@Controller('employees')
export class EmployeesConroller {
  //constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  findAll(): string {//Promise<Employee[]> {
    return 'hello'; //this.employeeService.findAll();
  }
}
