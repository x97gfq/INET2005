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

        <h1>ADD A NEW USER</h1>

        <form action="add_user_submit.php" method="POST">
            <div class="form-group">
                <label for="firstname">First name</label>
                <input type="text" class="form-control" name="firstname" id="firstname" placeholder="Enter first name">
            </div>
            <div class="form-group">
                <label for="lastname">Last name</label>
                <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Enter last name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" name="email" id="email" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>

    <!-- Include Bootstrap JS (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>



