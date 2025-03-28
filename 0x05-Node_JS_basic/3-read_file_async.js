const fs = require('fs').promises;

const processFile = (file) => {
  const cs = [];
  const swe = [];
  for (const line of file.slice(1)) {
    const row = line.split(',')
    const name = row[0];
    const filed = row[row.length - 1].trim();

    if (filed === 'CS') {
      cs.push(name);
    } else if (filed === 'SWE') {
      swe.push(name);
    }
  }
  return [cs, swe];
};

const countStudents = async (filePath) => {
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const students = processFile(file.split('\n'));
    console.log(`Number of students: ${students[0].length + students[1].length}`);
    console.log(`Number of students in CS: ${students[0].length}. List: ${students[0].join(', ')}`);
    console.log(`Number of students in SWE: ${students[1].length}. List: ${students[1].join(', ')}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
};
module.exports = countStudents;
