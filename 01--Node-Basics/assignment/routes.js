const requestHandler = (req, res) => {
	const { url, method } = req;

	if (url === '/') {
		res.write('<html>');
		res.write('<ul><li>Item 1</li><li>Item 2</li></ul>');
		res.write(
			'<body><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
		);
		res.write('</html>');

		return res.end();
	} else if (url === '/users') {
		const body = [];
		req.on('data', data => {
			body.push(data);
		});
		req.on('end', () => {
			console.log(Buffer.concat(body).toLocaleString());
		});
	}
	return res.end();
};

module.exports = requestHandler;
