const fs = require('fs');

const countStudents = (file) => {
  try {
    const fileData = fs.readFileSync(file, 'utf-8');
    const cs = [];
    const swe = [];
    const lines = fileData.split('\n').filter(line => line.trim() !== ''); // filter out empty lines

    lines.forEach((line) => {
      const parts = line.split(',');
      if (parts.length > 1) {
        const studentName = parts[0].trim(); // trim whitespace from the student name
        const field = parts[1].trim(); // trim whitespace from the field

        // Add to CS or SWE list based on the field
        if (field === 'CS') {
          cs.push(studentName);
        } else if (field === 'SWE') {
          swe.push(studentName);
        }
      }
    });

    // Print results
    process.stdout.write(`Number of students: ${cs.length + swe.length}\n`);
    process.stdout.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
    process.stdout.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}\n`);
  }
  catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

