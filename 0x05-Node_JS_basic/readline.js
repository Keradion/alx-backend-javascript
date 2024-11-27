const fs = require('fs')
const readline = require('readline')
const cs = []
const swe = []

const readstream = fs.createReadStream('database.csv')

const read = readline.createInterface({
	input: readstream
});

read.on('line', (line) => {
	// Extract the student name from the line
	studentName = line.split(',')[0]
	if (line.includes('CS')) {
		cs.push(studentName) 
	}
	else if (line.includes('SWE')) { 
		swe.push(studentName)
	}
});

read.on('close', () => {
	// total number of students
	console.log(`Number of students: ${cs.length + swe.length}`)
	process.stdout.write(`Number of students in CS: ${cs.length}. List: `)
	// display studetns form cs
	displayStudents(cs)
	process.stdout.write(`Number of students in SWE: ${swe.length}. List: `)
	// display students from swe
	displayStudents(swe)
});


const displayStudents = (students) => {
	console.log(students.join(', '));
};
