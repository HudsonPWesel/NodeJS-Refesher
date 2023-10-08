const path = require('path');
const express = require('express');
const app = express();
const parentDirectory = require('../util/path');
const Product = require('../models/product');
const router = express.Router();
// Same paths can be used but should be used as a filter

// route: /admin/add-product | GET

exports.getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	Product.findAll({ where: { productId: prodId } }).then(res => {
		console.log('handle promise');
	});
};
exports.postAddProduct = (req, res, next) => {
	Product.create({
		title: req.body.title,
		price: req.body.price,
		imageUrl: req.body.image,
		description: req.body.description,
	})
		.then(res => {
			console.log(message);
		})
		.catch(err => {
			console.log(err);
		});
};
router.get('/add-product', (req, res, next) => {
	res.send(
		'<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
	);
});

// route: /admin/add-product | POST

router.post('/add-product', (req, res, next) => {
	// Req is undefined by default, so we need to parse it
	const { body } = req;

	res.sendFile(path.resolve(parentDirectory, 'views', 'add-product.html'));
	res.redirect('/');
});
module.exports = router;
