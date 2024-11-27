// Simple Http Server 
const Express = require('express')
const app = Express()

app.get('/', (req, res) => {
	res.status(200)
	res.send('Hello Holberton School!\n')
})


const port = 1245;
app.listen(port)

moduls.export = app;
