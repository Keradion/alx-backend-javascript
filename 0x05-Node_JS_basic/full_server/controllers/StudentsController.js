// Class with two static methods
import readDatabase from '../utils.js'

const dbFile = process.argv[2] // Read the database file name 

class StudentsController {
	static getAllStudents(request, response) {
		readDatabase(dbFile)
			.then((studentDict) => {
				const cs = studentDict['CS'];
				const swe = studentDict['SWE'];
				const result = `This is the list of our students 
Number of students in CS: ${cs.length}. List: ${cs.join(', ')}
Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
				response.status(200).send(result);
			})
		.catch((error) => {
			response.status(500).send('Cannot load the database'); // Server Side Issue
		});
	}

	static getAllStudentsByMajor(request, response) {
		  readDatabase(dbFile)
                        .then((studentDict) => {
				let major = []
				const requestedMajor = request.params.major // Read major parameter value
                                if (requestedMajor == 'CS') {
					major = studentDict['CS'];
				} else if (requestedMajor == 'SWE')  {
					major = studentDict['SWE'];
				} else {
					response.status(500).send('Major parameter must be CS or SWE');
				}

                                const result = `List: ${major.join(', ')}`;
                                response.status(200).send(result);
                        })
                .catch((error) => {
                        response.status(500).send('Cannot load the database'); // Server Side Issue
                });
        }

}


export default StudentsController;
