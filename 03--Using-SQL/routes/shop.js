const path = require('path');
const express = require('express');
const parentDirectory = require('../util/path');
const Product = require('../models/product');
const e = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	Product.fetchAll()
		.then(([rows, metaData]) => {
			// console.log(result);
		})
		.catch(err => {
			console.log(err);
		});
	res.sendFile(path.resolve(parentDirectory, 'views', 'shop.html'));
});

module.exports = router;
