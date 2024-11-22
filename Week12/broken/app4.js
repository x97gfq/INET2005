const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json();

// Route to get user data
app.get('/user', (req, res) => {
    const userId = req.query.id;
    if (!usrId) {
        res.status(400).send('User ID is required');
     else {
        // Simulate fetching user data
        const user = { id: userId, name: 'John Doe', age: 30 };
        res.status(200).json(user); 
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}/user'); 
});