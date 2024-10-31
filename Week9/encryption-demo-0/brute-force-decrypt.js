const fs = require('fs');

// Function to decrypt text using Caesar cipher with a given shift
function caesarCipherDecrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

// Read the encrypted text from a file
const encryptedText = fs.readFileSync('encrypted.txt', 'utf8');

// Try all possible shifts (0 to 25)
for (let shift = 0; shift < 26; shift++) {
    const decryptedText = caesarCipherDecrypt(encryptedText, shift);
    console.log(`Shift ${shift}: ${decryptedText}`);
}
