






// Old way of setting up a server
const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200;
    res.end('Home Page!');
  } else if(req.url === '/hello'){
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200;
    res.end('Hello World');
  } else {
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 404
    res.end('Not Found');
  }

})

server.listen(3000, '127.0.0.1')
