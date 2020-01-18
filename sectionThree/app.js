const http = require('http');

const routes = require('./routes');

let i = 7

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3033);
