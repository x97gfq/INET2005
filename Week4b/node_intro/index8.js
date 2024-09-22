const http = require('http');
const mysql = require('mysql');

//an API for anyone who wants to hit the service and get a JSON response.

const hostname = '127.0.0.1';
const port = 8080;

var con = mysql.createConnection({ host: "localhost", database: "webapp", user: "root", password: "mysql" });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');

    var sql = "SELECT province_name FROM provinces WHERE province_name like 'Nova%' ORDER BY province_name;"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
});

server.listen(port, hostname, () => {
    con.connect(
        function(err) {
            if (err) throw err;
            console.log("Connected!");
        }
    );
    console.log(`Server started, goto http://${hostname}:${port}`);
});
