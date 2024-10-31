const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Encryption function
function encrypt(text) {
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32); // Replace with your actual key
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
        key: key.toString('hex') // Include the key for decryption purposes
    };
}

app.post('/encrypt', (req, res) => {
    const { username, password } = req.body;
    const encryptedUsername = encrypt(username);
    const encryptedPassword = encrypt(password);
    res.json({ encryptedUsername, encryptedPassword });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
