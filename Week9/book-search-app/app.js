const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    // Add more books as needed
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/search', (req, res) => {
    const searchQuery = req.body.searchQuery;
    const sanitizedQuery = searchQuery.replace(/[^a-zA-Z0-9 ]/g, ''); // Basic sanitization
    const results = books.filter(book => 
        book.title.includes(sanitizedQuery) || 
        book.author.includes(sanitizedQuery) || 
        book.genre.includes(sanitizedQuery)
    );
    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
