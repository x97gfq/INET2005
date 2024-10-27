const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit-review', [
    body('title').trim().isLength({ min: 1 }).withMessage('Title is required').isAlpha().withMessage('Title must contain only letters'),
    body('developer').trim().isLength({ min: 1 }).withMessage('Developer is required').isAlpha().withMessage('Developer must contain only letters'),
    body('genre').trim().isLength({ min: 1 }).withMessage('Genre is required'),
    body('review').trim().isLength({ min: 10 }).withMessage('Review must be at least 10 characters long')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('Review submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
