import readDatabase from '../utils';

const filePath = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    // Calling an asycnhronous function to fetch student data.
    try {
      const data = await readDatabase(filePath); // calling readDatabse
      const fileds = Object.keys(data);
      let result = 'This is the list of our students<br>';
      for (const filed of fileds) {
        let students = data[filed].join(', ')
        result = result + `Number of students in ${filed}:  ${data[filed].length}. List: ${students}<br>`;
      }
      return response.status(200).send(result);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major.toUpperCase();
    let result = '';
    try {
      const data = await readDatabase(filePath);
      if (major === ':CS') {
        result = `List: ${data.CS.join(',  ')}`;
      } else if (major === ':SWE') {
        result = `List: ${data.SWE.join(', ')}`;
      } else {
        return response.status(500).send('Major parameter must be CS or SWE');
      }
      return response.status(200).send(result);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
