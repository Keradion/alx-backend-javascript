// Class with two static methods
const readDatabase = require('../utils.js')

class StudentsController {
	static getAllStudents(request, response) {
		readDatabase('students.csv')
			.then((studentDict) => {
				const cs = studentDict['CS'];
				const swe = studentDict['SWE'];
				const result = `This is the list of our students 
Number of students: ${cs.length + swe.length}
Number of students in CS: ${cs.length}. List: ${cs.join(', ')}
Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}
`;
				response.status(200).send(result);
			})
		.catch((error) => {
			response.status(500).send(error); // Server Side Issue
		});
	}

	static getAllStudentsByMajor(request, response) {
		  readDatabase('students.csv')
                        .then((studentDict) => {
				let major = []
				const requestedMajor = request.params.major // Read major parameter value
                                if (requestedMajor == 'CS') {
					major = studentDict['CS'];
				} else {
					major = studentDict['SWE'];
				}

                                const result = `List: ${major.join(', ')}
`;
                                response.status(200).send(result);
                        })
                .catch((error) => {
                        response.status(500).send(error); // Server Side Issue
                });
        }

}



module.exports = StudentsController;
