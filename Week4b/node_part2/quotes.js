const express = require('express');
const app = express();
const port = 3000;

// JSON array of famous quotes
const quotes = [
  { "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" },
  { "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" },
  { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
  { "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" },
  { "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" },
  { "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan" },
  { "quote": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb" },
  { "quote": "An unexamined life is not worth living.", "author": "Socrates" },
  { "quote": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs" },
  { "quote": "Winning isn’t everything, but wanting to win is.", "author": "Vince Lombardi" }
];

// Define a route to return a random quote
app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Generate HTML output
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Random Quote</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container">
        <div class="jumbotron mt-5">
          <h1 class="display-4">Random Quote</h1>
          <p class="lead">${randomQuote.quote}</p>
          <hr class="my-4">
          <p><em>- ${randomQuote.author}</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
