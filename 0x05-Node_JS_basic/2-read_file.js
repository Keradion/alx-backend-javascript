const fs = require('fs')

const countStudents = (file) => {
	try {
		const fileData = fs.readFileSync(file, 'utf-8');
		const cs = [];
		const swe = [];
		const lines = fileData.split('\n')
		lines.forEach((line) => {
			if (line.includes('CS')) {
				studentName = line.split(',')[0].trim()
				cs.push(studentName);
			} else if (line.includes('SWE')){
				studentName = line.split(',')[0]
				swe.push(studentName);
			}

		});
		console.log(`Number of students: ${cs.length + swe.length}`)
		console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`)
		console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`)
	}
	catch(err) {
		throw new Error('Cannot load the database');
	}
};

module.exports = countStudents;

