const express = require('express');
const AppController = require('./AppController'); // Import your controller
const StudentsController = require('./StudentsController');
const app = express();
const port = 3000;

// Define the route using the controller
app.get('/', AppController.getHomePage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

