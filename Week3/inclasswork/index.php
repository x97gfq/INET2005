<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bootstrap Page</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script>
        function validateForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username == "" || password == "") {
                alert("Both fields are required.")
                return false;
            } else {
                return true;
            }
        }
    </script>
</head>
<body>
    <div class="container">

        <h1>Welcome to my awesome site.</h1>
        <h2>Please login</h2>

        <form action="check_login.php" method="post" onsubmit="return validateForm();">
            <P>Username:</p>
            <input type="text" name="username" id="username">

            <p>Password:</p>
            <input type="password" name="password" id="password">

            <input type="submit"/>
        </form>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



