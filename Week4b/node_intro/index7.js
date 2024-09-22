const http = require('http');
const mysql = require('mysql');
//human readable HTML response.

//this is an example of nodejs connecting to a mysql database
//and running a query (SQL)
//and hanging the results (iterating over the database rows 
//to produce HTML that it returned to the client)
const hostname = '127.0.0.1';
const port = 8080;

var con = mysql.createConnection(
        { 
            host: "localhost", 
            database: "webapp", 
            user: "root", 
            password: "mysql" 
        }
    );

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    var sql = "SELECT province_name FROM provinces WHERE province_name like 'N%' ORDER BY province_name;"
    con.query(sql, function (err, rows, fields) {
        if (err) throw err;

        var length = Object.keys(rows).length;

        let html = '<html>\n<head>\n<title>my page</title>\n</head>\n<body><ul>';

        for (var i = 0; i < length; i++) {
                html += "<li>" + rows[i].province_name + "</li>";
        }

        html += '</ul></body>\n</html>';

        res.write(html);
        res.end();
    });
 
});

server.listen(port, hostname, () => {

    con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
    });

    console.log(`Server started, goto http://${hostname}:${port}`);
});
