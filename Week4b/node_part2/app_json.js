const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'sport',
  port: 3307
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
    res.json(results);
    
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
