const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const fs = require('fs');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';

// Decryption function
function decrypt(encrypted, key) {
    const iv = Buffer.from(encrypted.iv, 'hex');
    const encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Main function to retrieve and decrypt data
async function retrieveAndDecryptData() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Read the shared key from a file
        const encryptionKey = fs.readFileSync('shared_key.txt', 'utf8').trim();

        // Retrieve the document from MongoDB
        const document = await collection.findOne({ name: 'John Doe' });
        if (!document) {
            console.log('Document not found');
            return;
        }

        // Decrypt specific fields
        const decryptedEmail = decrypt(document.email, encryptionKey);
        const decryptedPassword = decrypt(document.password, encryptionKey);

        // Print the decrypted data
        console.log('Decrypted Data:');
        console.log('Name:', document.name);
        console.log('Email:', decryptedEmail);
        console.log('Password:', decryptedPassword);
    } catch (error) {
        console.error('Error retrieving and decrypting data:', error);
    } finally {
        await client.close();
    }
}

retrieveAndDecryptData();
