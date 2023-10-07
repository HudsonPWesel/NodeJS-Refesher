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
	res.status(404).send('<h1>Page Not Found!</h1>');
});

const server = http.createServer(app);
server.listen(3000);
