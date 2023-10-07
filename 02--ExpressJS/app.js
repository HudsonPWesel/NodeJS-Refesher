const express = require('express');
const http = require('http');

const app = express();

app.use('/user', (req, res, next) => {
	res.send('<h1>Welcome Users</h1>');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Welcome!</h1>');
});
const server = http.createServer(app);

server.listen(3000);
