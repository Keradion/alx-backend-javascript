const fs = require('fs')

const countStudents = (file) => {
	try {
		const fileData = fs.readFileSync(file, 'utf-8');
		const cs = [];
		const swe = [];
		const lines = fileData.split('\n')
		lines.forEach((line) => {
			if (line.includes('CS')) {
				studentName = line.split(',')[0]
				cs.push(studentName);
			} else if (line.includes('SWE')){
				studentName = line.split(',')[0]
				swe.push(studentName);
			}

		});
		console.log(`Number of students: ${cs.length + swe.length}`)
		process.stdout.write(`Number of students in CS: ${cs.length}. List: `)
		process.stdout.write(cs.join(', '))
		console.log()
		process.stdout.write(`Number of students in SWE: ${swe.length}. List: `)
		process.stdout.write(swe.join(', '))
		console.log()
	}
	catch(err) {
		throw new Error('Cannot load the database');
	}
};

countStudents('database.csv');
