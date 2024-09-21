<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MongoDb</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">

        <?php
        require 'vendor/autoload.php'; // MongoDB Library

        try {
            // Connect to MongoDB
            $client = new MongoDB\Client("mongodb://mongodb:27017");

            // Select or create the database
            $database = $client->my_mongo_database;

            // Select or create the collection
            $collection = $database->my_collection;

            // Create a sample document to insert
            $document = [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'created_at' => new MongoDB\BSON\UTCDateTime()
            ];

            // Insert the document into the collection
            $result = $collection->insertOne($document);

            // Output the result
            echo "Inserted document with ID: " . $result->getInsertedId();
            
        } catch (MongoDB\Exception\Exception $e) {
            // Catch and display any error
            echo "Failed to connect to MongoDB: ", $e->getMessage();
        }
        ?>
        </div>

        <!-- Include Bootstrap JS (optional) -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>


