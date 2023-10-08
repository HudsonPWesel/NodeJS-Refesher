const path = require('path');
const http = require('http');

const parentDirectory = require('./util/path');

console.log(parentDirectory);
const express = require('express');
const app = express();
const sequelize = require('./database');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/users');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(parentDirectory + '/css'));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/users', userRoutes);

// Catch-all Route
app.use((req, res, next) => {
	res.sendFile(path.resolve(parentDirectory, 'views', '404.html'));
});

const server = http.createServer(app);

sequelize
	.sync()
	.then(res => {
		// console.log(res);
	})
	.catch(err => {
		console.log(err);
	});

server.listen(3000);
