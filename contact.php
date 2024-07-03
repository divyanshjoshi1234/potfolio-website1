<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'divyanshjoshi2018@gmail.com';
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    $full_message = "Name: $name\n";
    $full_message .= "Email: $email\n";
    $full_message .= "Subject: $subject\n";
    $full_message .= "Message: $message\n";
    
    if (mail($to, $subject, $full_message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed!";
    }
}
?>
