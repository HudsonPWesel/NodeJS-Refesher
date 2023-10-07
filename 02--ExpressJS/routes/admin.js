const path = require('path');
const express = require('express');
const parentDirectory = require('../util/path');

const router = express.Router();
// Same paths can be used but should be used as a filter

// route: /admin/add-product | GET

router.get('/add-product', (req, res, next) => {
	res.send(
		'<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
	);
});

// route: /admin/add-product | POST

router.post('/add-product', (req, res, next) => {
	// Req is undefined by default, so we need to parse it
	const { body } = req;
	console.log(body);
	res.sendFile(path.resolve(parentDirectory, 'views', 'add-product.html'));
	res.redirect('/');
});
module.exports = router;
