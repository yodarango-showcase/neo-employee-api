export class CreateEmployeeDto {
  readonly id?: string;
  readonly name: string;
  readonly phone: number;
  readonly address: {
    line_one: string;
    line_two?: string;
    city: string;
    state?: string;
    zip: number;
    country: string;
  };
  readonly hire_date: string;
  readonly DOB: string;
}
