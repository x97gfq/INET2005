<?php
session_start();
?>
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

    <?php
        $userId = $_GET["id"];
        //
        //
        //
        //
    ?>

    <h1>Delete User # <?=$userId?></h1>

    <?php
        $db_servername = "db";
        $db_username = "root";
        $db_password = "rootpassword";
        $db_name = "People";

        // Create connection
        $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // SQL statement
        $sql = "DELETE FROM Users WHERE id=$userId";

        if ($conn->query($sql) === TRUE) {
            echo "<h2>Record deleted successfully</h2>";
        } else {
            echo "<h2>Error: " . $sql . "<br>" . $conn->error . "</h2>";
        }

        // Close the connection
        $conn->close();
    ?>
        <p>Back to the <a href="show_users.php">user list</a></p>
    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



