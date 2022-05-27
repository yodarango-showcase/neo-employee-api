// nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
// services/ interfaces
import { EmployeesService } from './employees.service';
import { Employee } from './interfaces/employee.interface';
@Controller('employees')
export class EmployeesConroller {
  constructor(private readonly employeeService: EmployeesService) {}

  // create the user
  @Post()
  @ApiBody({ type: CreateEmployeeDto })
  @ApiCreatedResponse({ description: 'User creted' })
  async createEmployee(
    @Body('name') emName: string,
    @Body('phone') emPhone: number,
    @Body('line_one') emLineOne: string,
    @Body('line_two') emLineTwo: string,
    @Body('city') emCity: string,
    @Body('state') emState: string,
    @Body('zip') emZip: number,
    @Body('country') emCountry: string,
    @Body('hire_date') emHireDate: string,
    @Body('DOB') emDOB: string,
  ): Promise<Employee> {
    try {
      const newEmployee = await this.employeeService.createNewEmployee(
        emName,
        emPhone,
        emLineOne,
        emLineTwo,
        emCity,
        emState,
        emZip,
        emCountry,
        emHireDate,
        emDOB,
      );
      return newEmployee;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //get all users
  @Get()
  async findAll(@Query('index') index: string): Promise<Employee[]> {
    try {
      return await this.employeeService.findAll(index);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  async getEmployeeById(@Param('id') emID: string) {
    try {
      return await this.employeeService.getEmployeeById(emID);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Patch(':id')
  async updateOneEmployee(
    @Param('id') emId: string,
    @Body('name') emName: string,
    @Body('email') emEmail: string,
    @Body('phone') emPhone: number,
    @Body('line_one') emLineOne: string,
    @Body('line_two') emLineTwo: string,
    @Body('city') emCity: string,
    @Body('state') emState: string,
    @Body('zip') emZip: number,
    @Body('country') emCountry: string,
    @Body('hire_date') emHireDate: string,
    @Body('DOB') emDOB: string,
  ): Promise<Employee> {
    try {
      return await this.employeeService.updateEmployee(
        emId,
        emName,
        emEmail,
        emPhone,
        emLineOne,
        emLineTwo,
        emCity,
        emState,
        emZip,
        emCountry,
        emHireDate,
        emDOB,
      );
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async deleteOneEmployee(@Param('id') emId: string) {
    return await this.employeeService.deleteEmployee(emId);
  }
}
