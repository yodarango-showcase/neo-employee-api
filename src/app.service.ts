import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStarted(): string {
    return `
    <h1>Nest.js Back End Developer - Internship assignment</h1>
    <p style="color: blue;">My comments on blue</p>
<p>Assignment is to create a small Nest.js application for managing employees. Application should only provide Rest API with some CRUD operations. 
Technologies that should be used are: </p>
<ul>
<li>✅ Nest.js </li>
<li>✅ MongoDB </li>
<li>✅ Consider using the Mongoose package </li>
<li>✅ Swagger </li>
</ul>
<p>Everything you should need if you have never used Nest.js can be found in this link https://docs.nestjs.com/. 
Create Schema of employees that should contain their: </p>
<ul>
<li>✅ Name</li>
<li>✅ Email address </li>
<li>✅ Phone number </li>
<li>✅ Home address </li>
<li>✅ Home address can be one line or it can be splitted </li>
<li style="color:blue;">I decided to split the address for better data structure</li>
<li>✅ City </li>
<li>✅ ZIP Code </li>
<li>✅ Address line 1 </li>
<li>✅ Address line 2 </li>
<li>✅ If you go on splitted way only Address line 2 is not required field. </li>
<li>✅ Date of employment </li>
<li>✅ Date of Birth </li>
</ul>
<p>Endpoints for CRUD operations should be able to add ✅ new Employee, ✅ delete Employee, ✅ update Employee and return ✅ list of Employees. 
If you wish you can add pagination on return of list of Employees. 
Please use GitLab or GitHub repository where you will store the project. 
We are mostly interested in seeing: </p>
<p style="color: blue;">All CRUD operations have been implemented. Employees can be returned by id, deleted or active</p>
<ul>
<li>✅ Usage of GIT 
<li>✅ How you are going to setup the project 
<li>✅ Schema validation and default values 
<li>✅ Details on Swagger 
<li>✅ Do not worry, Swagger is neatly integrated into Nest.js 
</ul>

<h3>It would be great if but not necessary: </h3>
<ul>
<li>✅ Project has validation on endpoints</li>
<li>🟨 Project has basic test coverage </li>
<li style="color:blue;">Not implement due to time constrains</li>
<li>✅ Remaining tests that you think would be beneficial can be stated as To-Do items ● Readme.md file has explanation for using the project </li>
<li>🟨 MongoDB is used through Docker and can be easily started with Docker Compose for local usage </li>
<li style="color:blue;">Although started not finished due to time contrains</li>
<li>✅ Delete Employee is soft deletion </li>
</ul>
Please state that it’s not necessary to have everything, most important is for us to see your way of thinking. For any questions, please, do not hesitate to contact me at 
nikola.dasic@neotechsolutions.org or for instant messaging you can contact me via Telegram at https://tx.me/nikdale`;
  }
}
