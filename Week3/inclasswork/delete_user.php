<?php
session_start();
?>
<?php include 'check_session.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete a User</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">

        <h1>Hello World</h1>

        <?php include 'connection_open.php'; ?>
        <?php

            $userId = $_GET["id"];

            // SQL statement
            $sql = "DELETE FROM Users WHERE id=$userId";

            if ($conn->query($sql) === TRUE) {
                echo "<h2>Record deleted successfully</h2>";
            } else {
                echo "<h2>Error: " . $sql . "<br>" . $conn->error . "</h2>";
            }
        ?>
        <?php include 'connection_close.php'; ?>

        <p>Back to the <a href="show_users.php">user list</a></p>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



