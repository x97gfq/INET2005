//this is npm package express
const express = require('express');

//create a new app
const app = express();

//this is a json array of quotes 
const quotes = [
    { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance you must keep moving." },
    { author: "Isaac Newton", text: "If I have seen further it is by standing on the shoulders of Giants." },
    { author: "Yoda", text: "Do, or do not. There is no try." },
    { author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world." },
    { author: "Nelson Mandela", text: "It always seems impossible until it’s done." }
];

// Function to get a random quote
function getRandomQuote() {
    //generate a random number
    const randomIndex = Math.floor(Math.random() * quotes.length);
    //return the quote from the array using the random number(index)
    return quotes[randomIndex];
}

// Generate Bootstrap styled HTML
function generateHTML(quote) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${quote.text}</p>
                    <footer class="blockquote-footer">${quote.author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

//This line defines a route for the HTTP GET request at the root URL (/). 
//When a request is made to this URL, the callback function is executed.
app.get('/', (req, res) => {
    //This line calls the getRandomQuote function, which presumably returns a random quote from an array of quotes.
    const randomQuote = getRandomQuote();
    console.log("got a request", randomQuote);
    const htmlContent = generateHTML(randomQuote);
    res.send(htmlContent);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
