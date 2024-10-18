const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://172.16.0.118:27017/sports_v1', {}).then(() => {
    console.log('Connected to the MongoDB database.');
  }).catch(err => {
    console.error('Error connecting to the database:', err);
  })
;

// Define Mongoose schemas and models
const playerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  player_number: Number,
  team: {
    team_name: String,
    location: String
  }
});


// Create the model
const Player = mongoose.model('Player', playerSchema, 'players_and_teams');

// Define a route to retrieve and display the data
app.get('/', async (req, res) => {
  console.log('Received request to /');
  try {

    const players = await Player.find();

    // Generate HTML output
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Player and Team Data</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="container">
          <h1 class="mt-5">Player and Team Data</h1>
          <table class="table table-striped mt-3">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Player Number</th>
                <th>Team Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
            `;

    players.forEach(row => {
      html += `
          <tr>
          <td>${row.first_name}</td>
          <td>${row.last_name}</td>
          <td>${row.player_number}</td>
          <td>${row.team.team_name}</td>
          <td>${row.team.location}</td>
          </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
