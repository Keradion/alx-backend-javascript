const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);

app.listen(1245, () => {
});

module.exports = app;
