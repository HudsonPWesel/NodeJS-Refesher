const http = require('http');
const routes = require('./routes');

// Function that runs for every request

const server = http.createServer(routes);

server.listen(3000);
