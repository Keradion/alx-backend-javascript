const countStudents = require('./utils.js'); // Import the function

// Example test file
const testFile = 'students.csv';

// Test the countStudents function
countStudents(testFile)
  .then((result) => {
    console.log('CS students:', result['CS']);
    console.log('SWE students:', result['SWE']);
  })
  .catch((error) => {
    console.error(error.message);
  });

