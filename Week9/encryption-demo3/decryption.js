const fs = require('fs');
const crypto = require('crypto');

// Read the shared key from a file
const key = fs.readFileSync('shared_key.txt', 'utf8').trim();
console.log('Shared key:', key);

// Read the encrypted data from a file
const encryptedData = fs.readFileSync('encrypted.txt', 'utf8');
console.log('Encrypted data:', encryptedData);

// Split the iv and encrypted data
const [ivHex, encrypted] = encryptedData.split(':');
const iv = Buffer.from(ivHex, 'hex');
console.log('IV:', iv.toString('hex'));
console.log('Encrypted text:', encrypted);

// Create a decipher using the shared key and iv
const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);

// Decrypt the encrypted data
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted text:', decrypted);

// Write the decrypted data to a file
fs.writeFileSync('decrypted.txt', decrypted);

console.log('Decryption complete. Decrypted data written to decrypted.txt');
