const fs = require('fs');
const crypto = require('crypto');

// Read the input string from a file
const input = fs.readFileSync('input.txt', 'utf8').trim();

// Create a hash using SHA-256
const hash = crypto.createHash('sha256').update(input).digest('hex');

// Write the hash to a file
fs.writeFileSync('hash.txt', hash);

console.log('Hashing complete. Hash written to hash.txt');
