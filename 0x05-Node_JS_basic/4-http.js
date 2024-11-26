const http = require('http') 

const requestListener = (req, res) => {
	res.writeHead(200);
	res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);

const port = 1245;
const host = 'localhost';

app.listen(port, host);
