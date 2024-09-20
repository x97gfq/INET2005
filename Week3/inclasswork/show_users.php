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

        <p><a href="logout.php">Logout</a></p>

        <h1>User List</h1>

        <?php include 'connection_open.php'; ?>
        <?php
            // DO STUFF HERE:
            // Prepare the SQL statement
            $sql = "SELECT `id`, `lastname`, `firstname`, `email`, `password` FROM People.Users";

            // Execute the query
            $result = $conn->query($sql);

            // Create the HTML table from the results
            echo "<table class=\"table table-dark\">";
            echo "<tr><td>id</td><td>first name</td><td>last name</td><td>email</td></tr>";

            //here's where we want to echo the query results.
            if ($result->num_rows > 0) {
                //output our data here
                while ($row = $result->fetch_assoc()) {
                    //loop over the database results.

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
            
        ?>
        <?php include 'connection_close.php'?>

        <p>Add a <a href="add_user_form.php">new user</a>.</p>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



