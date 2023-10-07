const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.resolve('02--ExpressJS', 'views', 'shop.html'));
});

module.exports = router;
