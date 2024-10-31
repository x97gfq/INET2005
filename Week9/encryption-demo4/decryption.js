const fs = require('fs');
const crypto = require('crypto');

// Read the private key from a file
const privateKey = fs.readFileSync('private_key.pem', 'utf8');

// Read the encrypted data from a file
const encryptedData = fs.readFileSync('encrypted.txt', 'utf8');

// Decrypt the encrypted data using the private key
const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));

// Write the decrypted data to a file
fs.writeFileSync('decrypted.txt', decrypted.toString('utf8'));

console.log('Decryption complete. Decrypted data written to decrypted.txt');
