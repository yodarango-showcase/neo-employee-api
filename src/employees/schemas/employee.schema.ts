import { Schema } from 'mongoose';

// The following schema was created with globalization in mind, thus its properties type and requirement shall be reflected accordingly
export const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true, // does the company provide an email or does the emp keep a personal? It will be assumed that the company provides its own thus req = true
    minlength: 4,
    maxlength: 50,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 20,
  },
  address: {
    line_one: { type: String, required: true },
    line_two: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: false }, // only 14/15 states in the world are divided into states, thus this field is not required
    zip: { type: Number, required: true }, // according to the UPU most countries have a post code system in place, therefore this is required
    country: { type: String, required: true },
  },
  hire_date: {
    type: Date,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  user_deleted: {
    type: Date,
    required: false,
    default: null,
  },
  record_created: {
    type: Date,
    required: false,
    default: new Date(),
  },
});
