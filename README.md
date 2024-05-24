# MEAN Stack Basic Project
MEAN stands for M-MongoDb, E-Express.js, A-Angular JS and N-Node.js.
Using this Technologies, had created a User-Interface CRUD(CREATE-READ-UPDATE-DELETE) project using mongoDB Atlas!

## File Client-side ( Angular 15 ):
This File consists connection with file Server(Node JS - Express JS - MongoDB Atlas) with Client file which consists Angular JS and their UI components
>Angular 15 is used to create the client-side application.
>The application uses Bootstrap for styling and Font Awesome for icons.
>The application has two main components:
>Employee: This component displays a form to add/update employees and a table to list existing employees.
>Employee Form: This component is responsible for handling the user interaction for adding and updating employees

## File Server-side ( Node JS - Express JS - MongoDB ):
This file consists connection with Client(Angular JS), It consists Node JS server, Express JS and Mongo DB Atlas.
>The server-side API is built with Node.js and Express.js framework.
>MongoDB is used as the database.
>The API has endpoints for Insert, Update, and Delete operations.

## Functionalities
 >Insert Employee:
 * A form is provided to enter employee details like name, position, etc.
 * Clicking the submit button triggers the insert operation on the server-side API.
 * Upon successful insertion, the newly added employee is displayed in the table.

>Read Employee
* A view component is provided, which reads data from database sync real time.
* Clicking on data (row) it provides update functionality.
* Clicking on delete icon, takes permission to delete from database.

 >Update Employee:
 * Clicking on an existing employee record populates the form with the details.
 * Making changes to the form and clicking submit updates the corresponding employee record on the server-side API.
 * The table is refreshed to reflect the updated details.

 >Delete Employee
 * Clicking on the delete icon next to an employee record prompts for confirmation.
 * Clicking confirm triggers the delete operation on the server-side API.
 * Upon successful deletion, the employee record is removed from the table.
