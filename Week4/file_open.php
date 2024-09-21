<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Files</title>
    <!-- Include Bootstrap CSS via CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">

        <h3>Open a file and read contents line by line.</h1>

        <ul>
        <?php
            // Open the file for reading
            $file = 'quotes.txt';
            $handle = fopen($file, 'r');

            if ($handle) {
                // Read each line until end of file
                while (($line = fgets($handle)) !== false) {
                    echo "<li>" . $line . "</li>";
                }
                fclose($handle);
            } else {
                // Error handling if the file cannot be opened
                echo "Error opening the file.";
            }
        ?>
        </ul>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



