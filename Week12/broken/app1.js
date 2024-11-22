const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url = '/hello') { 
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello, world!); 
    } else 
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found');
    }
});

server.listen(port, (err) => {
    if (err) {
        return;
        console.error('Error starting the server:', err)
    }
    console.log(`Server is running on http://localhost:${port}/hello`);
});