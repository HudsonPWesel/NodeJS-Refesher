const parentDirectory = require('../util/path');

const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
	res.sendFile(path.resolve(parentDirectory, 'views', 'users.html'));
});

module.exports = router;
