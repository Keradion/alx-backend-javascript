const fs = require('fs');
const readline = require('readline');

const readDatabase = (file) => {
    return new Promise((resolve, reject) => {
	    const studentDict = {'CS': [], 'SWE': []}
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
            if (line) {
		                const studentName = line.split(',')[0];
		    if (line.includes('CS')) {
			    studentDict['CS'].push(studentName);
		    } else if (line.includes('SWE')) {
			    studentDict['SWE'].push(studentName);
		    }
	    }
	    });

        // Finalize when reading is complete
        read.on('close', () => {
            resolve(studentDict); // Resolve the promise when everything is done
        });
    });
};

export default readDatabase;
module.exports = readDatabase;
