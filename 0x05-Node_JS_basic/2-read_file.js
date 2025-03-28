const fs = require('fs');

const displayData = (cs, swe) => {
  const totalNumberOfStudents = cs.length + swe.length;
  console.log(`Number of students: ${totalNumberOfStudents}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
};

const processFile = (file) => {
  const swe = [];
  const cs = [];
  for (const line of file.slice(1)) {
    const row = line.split(',');
    const name = row[0];
    const department = row[row.length - 1].trim();
    if (department === 'CS') {
      cs.push(name);
    } else if (department === 'SWE') {
      swe.push(name);
    }
  }
  displayData(cs, swe);
};

const countStudents = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, 'utf-8');
    processFile((file).split('\n'));
  } catch {
    throw Error('Cannot load the database');
  }
};

// The function accept a file path as an argument and read the file synchrounesly.

module.exports = countStudents;
