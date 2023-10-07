const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
	res.send(
		'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
	);
	// next();
});

router.use('/product', (req, res, next) => {
	// Req is undefined by default, so we need to parse it
	const { body } = req;
	console.log(body);
	res.redirect('/');
});
module.exports = router;
