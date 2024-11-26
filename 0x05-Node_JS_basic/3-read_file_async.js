const fs = require('fs');
const readline = require('readline');

const countStudents = (file) => {
    return new Promise((resolve, reject) => {
        const cs = [];
        const swe = [];

        const readstream = fs.createReadStream(file);

        // Handle errors in file reading
	 readstream.on('error', () => {
      reject(new Error('Cannot load the database'));
    });
	    const read = readline.createInterface({
            input: readstream,
        });

        // Process each line
        read.on('line', (line) => {
            const studentName = line.split(',')[0];
            if (line) {
		    if (line.includes('CS')) {
			    cs.push(studentName);
		    } else if (line.includes('SWE')) {
			    swe.push(studentName);
		    }
	    }
	    });

        // Finalize when reading is complete
        read.on('close', () => {
            console.log(`Number of students: ${cs.length + swe.length}`);
            process.stdout.write(`Number of students in CS: ${cs.length}. List: `);
            displayStudents(cs);
            process.stdout.write(`Number of students in SWE: ${swe.length}. List: `);
            displayStudents(swe);
            resolve(); // Resolve the promise when everything is done
        });
    });
};

// Helper function to display students
const displayStudents = (students) => {
    console.log(students.join(', '));
};

module.exports = countStudents;
