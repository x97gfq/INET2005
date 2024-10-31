const fs = require('fs');
const crypto = require('crypto');

// Read the input string from a file
const input = fs.readFileSync('input.txt', 'utf8').trim();

// Read the given hash from a file
const givenHash = fs.readFileSync('hash.txt', 'utf8').trim();

// Create a hash using SHA-256
const hash = crypto.createHash('sha256').update(input).digest('hex');

// Compare the generated hash with the given hash
if (hash === givenHash) {
    console.log('The hashes match.');
} else {
    console.log('The hashes do not match.');
}

console.log('Generated hash:', hash);
console.log('Given hash:', givenHash);
