// Simple Http Server 
const Express = require('express')
const app = Express()

app.get('/', (req, res) => {
	res.status(200)
	res.send('Hello Holberton School!\n')
})

app.get('/students', (req, res) => {
	countStudents("database.csv")
    .then(() => {
	    res.status(200)
	    res.send(result)
    })
        .catch((error) => {
        console.log(error);
    });
})

const port = 1245;
app.listen(port)


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
            if (line) {
                                const studentName = line.split(',')[0];
                    if (line.includes('CS')) {
                            cs.push(studentName);
                    } else if (line.includes('SWE')) {
                            swe.push(studentName);
                    }
            }
            });

        // Finalize when reading is complete
        read.on('close', () => {
            result = (`This is the list of our students\nNumber of students: ${cs.length + swe.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}\n`)  
		resolve(result); // Resolve the promise when everything is done
        });
    });
};

module.exports = app;

