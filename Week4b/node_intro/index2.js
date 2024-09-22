
var http = require('http');

console.log("listening at http://localhost:8080");

var books =[ 
    { "title":"The Rise of Anti-Intellectualism in America", "author":"Richard Hofstadter"},
    { "title":"The Omnivore's Dilemma","author":"Michael Pollan"},
    { "title":"Reclaiming Conversation","author":"Sherry Turkle"},
    { "title":"Ungrading", "author": "Susan D. Blum"},
    { "title" : "In love with NodeJs", "author" : "Jamie"}
];

var app = http.createServer(function(req,res){
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Content-Type': 'application/json'
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (['GET', 'POST'].indexOf(req.method) > -1) {
        console.log("GOT A REQUEST!");
        //
        //
        //
        res.writeHead(200, headers);
        res.end(JSON.stringify(books));
        return;
    }
    
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
});
app.listen(8080);