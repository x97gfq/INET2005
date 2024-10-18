const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sports_v1', {});

// Define the schema
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

// CRUD Operations

// Create a new player
app.post('/players', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all players
app.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).send(players);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a single player by ID
app.get('/players/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).send();
    }
    res.status(200).send(player);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a player by ID
app.patch('/players/:id', async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!player) {
      return res.status(404).send();
    }
    res.status(200).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a player by ID
app.delete('/players/:id', async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).send();
    }
    res.status(200).send(player);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
