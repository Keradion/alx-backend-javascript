const displayMessage = () => {
	process.stdout.write('Hello NodeJS!\n')
};
// displayMessage can be import from other files
module.exports = displayMessage;
