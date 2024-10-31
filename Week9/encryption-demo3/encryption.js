/*This script reads a shared key and plaintext from files, 
encrypts the text, and writes the encrypted data to a new file.*/

const fs = require('fs');
const crypto = require('crypto');

// Read the shared key from a file
const key = fs.readFileSync('shared_key.txt', 'utf8').trim();

// Read the plaintext from a file
const plaintext = fs.readFileSync('plaintext.txt', 'utf8');

// Generate an initialization vector
const iv = crypto.randomBytes(16);

// Create a cipher using the shared key and iv
const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);

// Encrypt the plaintext
let encrypted = cipher.update(plaintext, 'utf8', 'hex');
encrypted += cipher.final('hex');

// Write the iv and encrypted data to a file
const encryptedData = iv.toString('hex') + ':' + encrypted;
fs.writeFileSync('encrypted.txt', encryptedData);

console.log('Encryption complete. Encrypted data written to encrypted.txt');


