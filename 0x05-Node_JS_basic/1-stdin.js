const readline = require('readline');

const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rline.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`)
  // Message displays when the user try to close or end the program - close event.
  rline.on('close', () => {
    console.log('This important software is now closing')
  })
})


