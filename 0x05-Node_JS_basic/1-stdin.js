const askUserName = () => {
	process.stdout.write('Welcome to Holberton School, what is your name?\n')
};

// Accepting User Input 

process.stdin.on('data', function(data) {
	process.stdout.write(`Your name is: ${data}`);
});

// During Program Termination

process.on('exit', (code) => {
	console.log('This important software is now closing');
});

askUserName()
