const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    let html = '<html>\n<head>\n<title>my page</title>\n</head>\n<body>Hello there</body>\n</html>';
    res.write(html);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server started, goto http://${hostname}:${port}`);
});

