# NEO FICTITIOUS COMPANY EMPLOYEE API

**Docs**

### Docker implementation was started but not finished, you can disregard Docker files

1. create an .env file in the root project and add a variable called MONGO_URI=<conn string provided in the email>
2. Start the project by running command start:dev
3. open project on http://localhost:3000/api
4. There are 6 requests tyoes

- _GET "/"_
- responds with an HTML doc detialing the project's implementation and completion

- _POST"/employees"_ ¨
- allows a body post request containing the data needed to create a new user

- _GET "/employees?<startAtIndex>&<delete>`"_
- requires a route query "index" which represents the number of items that the user wishes to skipped
- requires a route query "deleted" which represents whether to getonly deleted or active users
- gets an array of the last 2 users created or last 2 users deleted

- _GET "/employees/<id>`"_
- requires a route param "id" which represents the user id to be fetched
- gets one user specified by id

- _PATCH "/employees/<id>`"_
- requires a route param "id" which represents the user id to be updated
- updates one user on only the fields that have changed

- _DELETE "/employees/<id>`"_
- requires a route param "id" which represents the user id to be deleted
- (soft deletion) updates the field "user_deleted" on the user which otherwise is null

**TEST COVERAGE THAT COUL BE IMPLEMENTED**

_GET/employess_

1. verify that only deleted users are retruned if query "deleted=true" is passed
2. verify that only active users are retruned if query "deleted=false" is passed or if it is ommited

_GET "/employees/<id>`"_

3. Verify that only one user is returned if an existing id is passed in the params
4. Verify that only no user are returned if a non existing id is passed in the params

_PATCH "/employees/<id>`"_

5. Verify that only the values passed in the body are updated
6. Verify that validation works for all types of input

_DELETE "/employees/<id>`"_

7. Verify that user_delted is updated accurately when user is deleted
