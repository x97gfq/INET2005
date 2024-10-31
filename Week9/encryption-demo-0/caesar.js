const fs = require('fs');

// Function to encrypt text using Caesar cipher
function caesarCipherEncrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

// Read the plaintext from a file
const plaintext = fs.readFileSync('plaintext.txt', 'utf8');

// Define the shift value
const shift = 3; // Example shift value

// Encrypt the plaintext
const encryptedText = caesarCipherEncrypt(plaintext, shift);

// Write the encrypted text to a file
fs.writeFileSync('encrypted.txt', encryptedText);

console.log('Encryption complete. Encrypted text written to encrypted.txt');

