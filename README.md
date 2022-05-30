# NEO FICTITIOUS COMPANY EMPLOYEE API

**Docs**

1. Start the project by running command start:dev
2. open project on http://localhost:3000/api
3. There are 6 requests tyoes

- _GET "/"_
- responds with a string detialing where the documentation to the project can be found

- _POST"/employees"_ ¨
- allows a body post request containing the data needed to create a new user

- _GET "/employees?<startAtIndex>`"_
- requires a route query "index" which represents the number of items that the user wishes to skipped
- gets an array of the last 5 users created

- _GET "/employees/<id>`"_
- requires a route param "id" which represents the user id to be fetched
- gets one user specified by id

- _PATCH "/employees/<id>`"_
- requires a route param "id" which represents the user id to be updated
- updates one user on only the fields that have changed

- _PATCH "/employees/<id>`"_
- requires a route param "id" which represents the user id to be updated
- updates one user on only the fields that have changed

- _PATCH "/employees/<id>`"_
- requires a route param "id" which represents the user id to be deleted
- (soft deletion) updates the field "deleted" on the user which otherwise is empty
