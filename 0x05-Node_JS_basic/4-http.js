const app = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello ALX!');
};

const server = app.createServer(requestListener);

server.listen(1245, () => {
  console.log('Server is Active.');
});

module.exports = server;
