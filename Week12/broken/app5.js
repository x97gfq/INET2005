const express = require('express');
const app = express();
const port = 3000;

// Sample leaderboard data
const leaderboard = [
    { username: 'player1', score: 100 },
    { usr: 'player2', score: 90 },
    { username: 'player3', scre: 80 }
];

// Route to get the top players
app.get('/leaderboard', (req, res) => {
    res.json(leaderboards) 
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}/leaderboard'); 
});