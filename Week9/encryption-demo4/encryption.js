const fs = require('fs');
const crypto = require('crypto');

// Read the public key from a file
const publicKey = fs.readFileSync('public_key.pem', 'utf8');

// Read the plaintext from a file
const plaintext = fs.readFileSync('plaintext.txt', 'utf8');

// Encrypt the plaintext using the public key
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext));

// Write the encrypted data to a file
fs.writeFileSync('encrypted.txt', encrypted.toString('base64'));

console.log('Encryption complete. Encrypted data written to encrypted.txt');
