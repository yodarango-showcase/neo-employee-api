import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

// _id is not in the DTO since it is created on insertion by mongo
export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  readonly email?: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({ type: Number, description: 'phone' })
  readonly phone: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Address Line One' })
  line_one: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Address Line Two' })
  line_two?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'City' })
  city: string;

  @IsString()
  @ApiProperty({ type: String, description: 'State' })
  state?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Zip Code' })
  zip: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Country' })
  country: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: String, description: 'Hire Date' })
  readonly hire_date: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: String, description: 'Date of Birth' })
  readonly DOB: string;
}
