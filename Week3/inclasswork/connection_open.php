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
?>