import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  readonly id?: string;
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;
  @ApiProperty({ type: Number, description: 'phone' })
  readonly phone: number;
  @ApiProperty({ type: String, description: 'Address Line One' })
  line_one: string;
  @ApiProperty({ type: String, description: 'Address Line Two' })
  line_two?: string;
  @ApiProperty({ type: String, description: 'City' })
  city: string;
  @ApiProperty({ type: String, description: 'State' })
  state?: string;
  @ApiProperty({ type: Number, description: 'Zip Code' })
  zip: number;
  @ApiProperty({ type: String, description: 'Country' })
  country: string;
  @ApiProperty({ type: String, description: 'Hire Date' })
  readonly hire_date: string;
  @ApiProperty({ type: String, description: 'Date of Birth' })
  readonly DOB: string;
}
