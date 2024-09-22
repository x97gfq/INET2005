var http = require('http');

console.log("listening on http://localhost:8080");

http.createServer(function (req, res) {

    console.log("got a request");

    //responding
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
