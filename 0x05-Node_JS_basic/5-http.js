const fs = require('fs').promises;

const http = require('http');

const filePath = process.argv[2];

const processFile = (file) => {
  const cs = [];
  const swe = [];
  for (const line of file.slice(1)) {
    const row = line.split(',');
    const name = row[0];
    const filed = row[row.length - 1].trim();

    if (filed === 'CS') {
      cs.push(name);
    } else if (filed === 'SWE') {
      swe.push(name);
    }
  }
  return [cs, swe];
};

const countStudents = async (filePath) => {
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const students = processFile(file.split('\n'));
    return `This is the list of our students\nNumber of students: ${students[0].length + students[1].length}\nNumber of students in CS: ${students[0].length}. List: ${students[0].join(', ')}\nNumber of students in SWE: ${students[1].length}. List: ${students[1].join(', ')}`;
  } catch (error) {
    throw Error('Cannot load the database')
  }
};

const requestListener = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(filePath).then((response) => {
      res.writeHead(200);
      res.end(response);
    }).catch((error) => {
      const response = `This is the list of our students\n${error}`;
      res.writeHead(200);
      res.end(response);
    });
  }
};

const app = http.createServer(requestListener);

app.listen(1245, () => {
});

module.exports = app;
