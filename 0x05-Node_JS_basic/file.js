const fs = require('fs');

try {
  const data = fs.readFileSync('database.csv', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Cannot load the database');
}

