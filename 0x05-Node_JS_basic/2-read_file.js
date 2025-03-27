const fs = require('node:fs');
const countStudents = (filePath) => {
  try{
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const csStudents = [];
    const sweStudents = [];
    
    const studentsList = Array(fileContent);
    const list = studentsList.slice(0);
    console.log(list);

    } catch{
    throw Error('Cannot load the database')
  }
}
module.exports = countStudents;
// The function accept a file path as an argument and read a file synchrounesly.
