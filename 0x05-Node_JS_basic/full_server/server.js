const express = require('express')
const app = express() // Express Instance 
const port = 1245;
const routes = require('./routes/index.js')

app.use(routes) // routes associated with server instance 

app.listen(port); // start the server

export default app;
module.exports = app;
