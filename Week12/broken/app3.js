const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to add a new user
app.post('\add-user', (req, res) => {
    const user = req.body; 
    if (!user.name | !user.age) {
        res.status(999).send('Name and age are required') //bad request 
    } else {
        res.status(201).send(`User ${user.name} added`)
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}/add-user');
});