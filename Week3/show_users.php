<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">

    <h1>Users</h1>

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

        // Prepare the SQL statement
        $sql = "SELECT `id`, `lastname`, `firstname`, `email`, `password` FROM People.Users";

        // Execute the query
        $result = $conn->query($sql);

        // Create the HTML table from the results
        echo "<table class=\"table table-dark\">";
        echo "<tr><td>id</td><td>first name</td><td>last name</td><td>email</td></tr>";

        // Fetch data
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["firstname"] . "</td>";
                echo "<td>" . $row["lastname"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td><a href=\"delete_user.php?id=" . $row["id"] . "\">DELETE</a></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan=\"5\">No users found.</td></tr>";
        }

        echo "</table>";

        // Close the connection
        $conn->close();
        ?>
        <p>Add a <a href="add_user_form.php">new user</a>.</p>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



