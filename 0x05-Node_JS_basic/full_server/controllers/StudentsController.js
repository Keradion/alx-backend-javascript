import readDatabase from '../utils.js'

const filePath = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    // Calling an asycnhronous function to fetch student data.
    try {
      const data = await readDatabase(filePath); // calling readDatabse
      const fileds = Object.keys(data);
      let result = '';
      for (const filed of fileds) {
        result = `Number of students in ${filed}:  ${data[filed].length}. List: ${data[filed].join(',  ')}<br>`;
      }
      response.status(200);
      response.send(result);
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major.toUpperCase(); 
    let result = '';
    try {
      const data = await readDatabase(filePath); 
      if (major === ':CS') {
        result = `Number of students in CS:  ${data.CS.length}. List: ${data.CS.join(',  ')}`;

      } else if (major === ':SWE') {
        result = `Number of students in SWE:  ${data.SWE.length}. List: ${data.SWE.join(',')}`;
      } else {
        response.status(500);
        response.send('Major Parameter must be CS or SWE')
    }
       response.status(200);
       response.send(result);
  } catch (error) {
       response.status(500);
       response.send(error);
  }
  }
}

export default StudentsController;