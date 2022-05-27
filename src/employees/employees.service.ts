// nest
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

//mongoose
import { Model } from 'mongoose';

//interface
import { Employee } from './interfaces/employee.interface';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<Employee>,
  ) {}

  // create a new employee
  async createNewEmployee(
    emName: string,
    emPhone: number,
    emLineOne: string,
    emLineTwo: string,
    emCity: string,
    emState: string,
    emZip: number,
    emCountry: string,
    emHireDate: string,
    emDOB: string,
  ): Promise<Employee> {
    const newEmployee = new this.employeeModel({
      name: `${emName}`,
      email: `${emName.split(' ')[0]}@neo.com`, // takes the first name and assings it to the email. Of course in real life scenario unique email addresses would be created rather than running the risk to create duplicate emails
      phone: `${emPhone}`,
      address: {
        line_one: `${emLineOne}`,
        line_two: `${emLineTwo}`,
        city: `${emCity}`,
        state: `${emState}`,
        zip: `${emZip}`,
        country: `${emCountry}`,
      },
      hire_date: `${emHireDate}`,
      DOB: `${emDOB}`,
    });

    // save the new employee
    try {
      const insertedEmployee = await newEmployee.save();
      return insertedEmployee;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // get all employees with pagination
  async findAll(index: string): Promise<Employee[]> {
    // parse the query
    const skip = parseInt(index);

    try {
      // pass the query to the skip method to paginate
      return await this.employeeModel.find().limit(5).skip(skip).exec();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // get one employee by ID
  async getEmployeeById(id: string): Promise<Employee> {
    try {
      return await this.employeeModel.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateEmployee(
    emId: string,
    emName: string,
    emEmail: string,
    emPhone: number,
    emLineOne: string,
    emLineTwo: string,
    emCity: string,
    emState: string,
    emZip: number,
    emCountry: string,
    emHireDate: string,
    emDOB: string,
  ) {
    const findEmployee = await this.employeeModel.findOne({ _id: emId });
    if (emName) {
      findEmployee.name = emName;
    }
    if (emEmail) {
      findEmployee.email = emEmail;
    }
    if (emPhone) {
      findEmployee.phone = emPhone;
    }
    if (emLineOne) {
      findEmployee.address.line_one = emLineOne;
    }
    if (emLineTwo) {
      findEmployee.address.line_two = emLineTwo;
    }
    if (emCity) {
      findEmployee.address.city = emCity;
    }
    if (emState) {
      findEmployee.address.state = emState;
    }
    if (emZip) {
      findEmployee.address.zip = emZip;
    }
    if (emCountry) {
      findEmployee.address.country = emCountry;
    }
    if (emHireDate) {
      findEmployee.hire_date = emHireDate;
    }
    if (emDOB) {
      findEmployee.DOB = emDOB;
    }
    console.log(emId, emName, emCity);

    try {
      const updatedUser = await findEmployee.save();
      return updatedUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // delete one user
  async deleteEmployee(id: string): Promise<number> {
    try {
      const deletedEmploye = await this.employeeModel.deleteOne({ _id: id });
      return deletedEmploye.deletedCount;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
