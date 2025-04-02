import fs from 'fs/promises';

const processFile = (file) => {
  const swe = [];
  const cs = [];
  for (const line of file.slice(1)) {
    const row = line.split(',');
    const name = row[0];
    const filed = row[row.length - 1].trim();

    if (filed === 'CS') {
      cs.push(name);
    } else {
      swe.push(name);
    }
  }
  return [cs, swe];
};

const readDatabase = async (filePath) => {
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const lines = file.split('\n')
    const students = processFile(lines); // Process the file and return an object of arrays of the firstname of students per filed.
    const result = {
      'CS': students[0],
      'SWE': students[1],
    }
    return result;
  } catch (error) {
    throw new Error('Cannot read the file');
  }
};

export default readDatabase;
