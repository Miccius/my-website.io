<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include PHPMailer autoload from Composer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to autoload.php from Composer

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate form data
    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings (Use SMTP)
        $mail->isSMTP();                              
        $mail->Host = 'smtp.gmail.com';               
        $mail->SMTPAuth = true;                       
        $mail->Username = 'francesco.miccio.web@gmail.com';   
        $mail->Password = 'xkodqporukutlplv';  // App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->SMTPDebug = 2; // 2 for detailed debug output
                           

        // Email settings
        $mail->setFrom($email, $firstName . ' ' . $lastName); // Sender email and name
        $mail->addAddress('francesco.miccio.web@gmail.com');  // Recipient email

        // Email content
        $mail->isHTML(true);                              
        $mail->Subject = 'New Contact Form Message';
        $mail->Body    = "<p>You have received a new message from your website's contact form.</p>
                          <p><strong>First Name:</strong> $firstName</p>
                          <p><strong>Last Name:</strong> $lastName</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Message:</strong><br>$message</p>";

        // Send email
        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
