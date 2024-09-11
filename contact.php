<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "mifra82@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>