const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('working!!!!\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');