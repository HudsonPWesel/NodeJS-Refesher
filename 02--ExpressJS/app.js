const express = require('express');
const http = require('http');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/user', (req, res, next) => {
	res.send('<h1>Welcome Users</h1>');
});
app.post('/add-product', (req, res, next) => {
	res.send(
		'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
	);
	// next();
});

app.use('/product', (req, res, next) => {
	// Req is undefined by default, so we need to parse it
	const { body } = req;
	console.log(body);
	res.redirect('/');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Welcome!</h1>');
});
const server = http.createServer(app);

server.listen(3000);
