const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const fs = require('fs');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';

// Encryption function
function encrypt(text, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

// Main function to insert encrypted data
async function insertEncryptedData() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Read the shared key from a file
        const encryptionKey = fs.readFileSync('shared_key.txt', 'utf8').trim();

        // JSON object to be inserted
        const jsonObject = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'supersecretpassword'
        };

        // Encrypt specific fields
        const encryptedEmail = encrypt(jsonObject.email, encryptionKey);
        const encryptedPassword = encrypt(jsonObject.password, encryptionKey);

        // Replace original fields with encrypted data
        jsonObject.email = encryptedEmail;
        jsonObject.password = encryptedPassword;

        // Insert the encrypted JSON object into MongoDB
        const result = await collection.insertOne(jsonObject);
        console.log('Document inserted with _id:', result.insertedId);
    } catch (error) {
        console.error('Error inserting encrypted data:', error);
    } finally {
        await client.close();
    }
}

insertEncryptedData();
