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
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
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
  @ApiResponse({ status: 200, description: 'User created successfully' })
  @ApiResponse({
    status: 505,
    description: 'Sorry, there was an internal error',
  })
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
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 505,
    description: 'Sorry, there was an internal error',
  })
  async findAll(
    @Query('index') index: string,
    @Query('deleted') deleted: string,
  ): Promise<Employee[]> {
    try {
      if (deleted === 'true') {
        return await this.employeeService.findAllDeleted(index);
      }
      return await this.employeeService.findAllActive(index);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({
    status: 404,
    description: 'Resourse not found',
  })
  async getEmployeeById(@Param('id') emID: string) {
    try {
      const employee = await this.employeeService.getEmployeeById(emID);

      // typically I would return res.status(404) but I amm not 100% sure how to efficientlysure do this on NesrtJs
      if (!employee) return 'User not found';
      return employee;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Patch(':id')
  @ApiBody({ type: CreateEmployeeDto })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({
    status: 505,
    description: 'Sorry, there was an internal error',
  })
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
  ): Promise<Employee | string> {
    try {
      const patchedUser = await this.employeeService.updateEmployee(
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
      // typically I would return res.status(404) but I amm not 100% sure how to efficientlysure do this on NesrtJs
      if (!patchedUser) return 'User not found';
      return patchedUser;
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({
    status: 505,
    description: 'Sorry, there was an internal error',
  })
  async deleteOneEmployee(@Param('id') emId: string) {
    return await this.employeeService.deleteEmployee(emId);
  }
}
