const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'sport',
  port: 3306
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Define a route to retrieve and display the data
app.get('/', (req, res) => {
  console.log('Received request to /');
  const query = `
    SELECT Player.first_name, Player.last_name, Player.player_number, Team.team_name, Team.location
    FROM Player
    JOIN Team ON Player.team_id = Team.team_id
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    //console.log('Query executed successfully:', results);

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

            results.forEach(row => {
            html += `
                <tr>
                <td>${row.first_name}</td>
                <td>${row.last_name}</td>
                <td>${row.player_number}</td>
                <td>${row.team_name}</td>
                <td>${row.location}</td>
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
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
