const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sports_v1', {}).then(() => {
    console.log('Connected to the MongoDB database.');
}).catch(err => {
    console.error('Error connecting to the database:', err);
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

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
        res.render('players', {
            title: 'Player and Team Data',
            players: players
        });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
