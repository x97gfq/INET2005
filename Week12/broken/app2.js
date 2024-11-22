const express = require('express');
const app = express();
const port = 3000;

// Route to get a welcome message
app.get('\welcome', (req, res) => {
    req.send('Welcome to the server!')
});

// Start the server
app.listen(ports, () => {
    console.log('Server is running on http://localhost:${port}/welcome');
});