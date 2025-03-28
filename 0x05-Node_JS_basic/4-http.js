const app = require('http');

// Create a server first
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello ALX!');
}

const Server = app.createServer(requestListener);

Server.listen(1245, 'localhost', () => {
  console.log('Server is Active.');
});

module.exports = app;
