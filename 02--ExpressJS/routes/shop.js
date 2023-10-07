const path = require('path');
const express = require('express');
const parentDirectory = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.resolve(parentDirectory, 'views', 'shop.html'));
});

module.exports = router;
