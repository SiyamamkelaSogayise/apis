<!DOCTYPE html>
<html lang="en">
<head>
 <title>Thank You! - Let's Get Braided</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="thankYou.css">
</head>
<body>
<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
        $date = $_POST['date'];
        $time = $_POST['time'];
        $length = $_POST['hair_length'];
        $type = $_POST['braid_type'];

         //Database connection
    $conn = new mysqli('localhost', 'root', '', 'bookingshandler');
    if ($conn->connect_error) {
        die('Connected Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO inquries(name,surname,email,time,date,hair_length,braid_type) VALUES (?,?,?,?,?,?,?)");
        if (!$stmt) {
            die('Error preparing statement:: ' . $conn->error);
        }
        $stmt->bind_param("sssssss", $name, $surname, $email, $time, $date, $length, $type);
        if (!$stmt->execute()) {
            die('Error executing statement: ' . $stmt->error);
        }
        echo '<div class="container">
            <h1>Thank You for Booking, ' . $name . '!</h1>
            <p>We are look forward to slaying your hair!</p>
            <p>Here is a confirmation of your appointment details: Date ' . $date . ', Time ' . $time . '</p> 
            <p>See you soon!</p>
            <a href="index.html" class="btn">Return to Home Page</a>
        </div>';

        $stmt->close();
        $conn->close();
    }
    } else {
        echo "Invalid request method.";
    }
?>

</body>
</html>

