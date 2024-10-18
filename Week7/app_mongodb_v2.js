const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://172.16.0.118:27017/sports_v2', {}).then(() => {
    console.log('Connected to the MongoDB database.');
  }).catch(err => {
    console.error('Error connecting to the database:', err);
  }
);

// Define Mongoose schemas and models
const playerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  player_number: Number,
  team_id: mongoose.Schema.Types.ObjectId
});

const teamSchema = new mongoose.Schema({
  team_name: String,
  location: String
});

const Player = mongoose.model('Player', playerSchema);
const Team = mongoose.model('Team', teamSchema);

// Define a route to retrieve and display the data
app.get('/', async (req, res) => {
  console.log('Received request to /');
  try {
    const players = await Player.aggregate([
      {
        $lookup: {
          from: 'teams',
          localField: 'team_id',
          foreignField: '_id',
          as: 'team_info'
        }
      },
      { $unwind: '$team_info' },
      {
        $project: {
          first_name: 1,
          last_name: 1,
          player_number: 1,
          'team_info.team_name': 1,
          'team_info.location': 1
        }
      }
    ]);

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
          <td>${row.team_info.team_name}</td>
          <td>${row.team_info.location}</td>
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
