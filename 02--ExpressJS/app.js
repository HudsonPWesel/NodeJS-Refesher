const path = require('path');
const http = require('http');

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Catch-all Route
app.use((req, res, next) => {
	res.sendFile(path.resolve('02--ExpressJS', 'views', '404.html'));
});

const server = http.createServer(app);
server.listen(3000);
