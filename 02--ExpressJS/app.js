const http = require('http');
const routes = require('./routes');

const express = require('express');
const { lchown } = require('fs');

const app = express();
// Requests are funneled through many functions which allows you to split your code and easily hook in other middleware functions
// Function that runs for every request

app.use((req, res, next) => {
	// next function to go to next middleware function
	//
	console.log('Mid 1');
	next();
});

app.use((req, res, next) => {
	console.log('Mid 2');
	// Automatically sets HTML head
	res.send('<h1>Hello</h1>');
});

const server = http.createServer(app);

server.listen(3000);
