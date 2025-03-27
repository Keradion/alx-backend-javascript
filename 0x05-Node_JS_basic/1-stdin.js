const readline = require('node:readline');

const rline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rline.question('Welcome to ALX, What is your name?\n', (name) => {
  console.log(`Your name is: ${name}`)
  rline.on('close', () => {
    console.log('This important software is now closing')
    process.exit(0);
  })
})


