<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MongoDB Records</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="mt-4">MongoDB Records</h1>
        <table class="table table-striped mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <?php
                require 'vendor/autoload.php'; // MongoDB Library

                try {
                    // Connect to MongoDB
                    $client = new MongoDB\Client("mongodb://mongodb:27017");

                    // Select or create the database
                    $database = $client->my_mongo_database;

                    // Select or create the collection
                    $collection = $database->my_collection;

                    // Fetch all documents in the collection
                    $documents = $collection->find();

                    // Iterate through the documents and display them in the table
                    foreach ($documents as $document) {
                        echo "<tr>";
                        echo "<td>" . $document['name'] . "</td>";
                        echo "<td>" . $document['email'] . "</td>";
                        echo "<td>" . $document['created_at']->toDateTime()->format('Y-m-d H:i:s') . "</td>";
                        echo "</tr>";
                    }
                    
                } catch (MongoDB\Exception\Exception $e) {
                    // Catch and display any error
                    echo "<tr><td colspan='3'>Failed to retrieve records from MongoDB: " . $e->getMessage() . "</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
