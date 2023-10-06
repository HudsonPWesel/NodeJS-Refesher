const routeHandler = (req, res) => {
	const { url, method } = req;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
		);
	} else if (url === '/message') {
		const body = [];
		req.on('data', chunk => {
			body.push(chunk);
		});

		req.on('end', () => {
			const data = Buffer.concat(body).toLocaleString();
			console.log(res);
		});
	}
	return res.end();
};

module.exports = routeHandler;
