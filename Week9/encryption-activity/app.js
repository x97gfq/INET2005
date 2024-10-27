const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/encrypt', (req, res) => {
    const { username, password } = req.body;
    const encryptedUsername = encrypt(username);
    const encryptedPassword = encrypt(password);
    res.json({ encryptedUsername, encryptedPassword });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
