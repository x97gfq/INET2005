<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hashing</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <?php
        // Function to verify the password
        function verifyPassword($password, $file) {
            // Read the hashed password from the file
            $hashedPasswords = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            
            foreach ($hashedPasswords as $hashedPassword) {
                // Verify the password against the hashed password
                if (password_verify($password, $hashedPassword)) {
                    return true;
                }
            }
            return false;
        }

        // Example usage
        $passwordToCheck = "my_secure_password";
        $file = 'hashed_passwords.txt';

        if (verifyPassword($passwordToCheck, $file)) {
            echo "Password is correct.";
        } else {
            echo "Password is incorrect.";
        }
        ?>

        </div>

        <!-- Include Bootstrap JS (optional) -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>



