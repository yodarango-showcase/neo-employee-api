interface Address {
  line_one: string;
  line_two?: string;
  city: string;
  state?: string;
  zip: number;
  country: string;
}

export interface Employee {
  id?: string;
  name: string;
  email: string;
  phone: number;
  address: Address;
  hire_date: string;
  DOB: string;
}
