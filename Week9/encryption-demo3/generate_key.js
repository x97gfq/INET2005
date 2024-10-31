const fs = require('fs');
const crypto = require('crypto');

// Generate a 32-byte key
const key = crypto.randomBytes(32).toString('hex');

// Write the key to a file
fs.writeFileSync('shared_key.txt', key);

console.log('Shared key generated and saved to shared_key.txt');
