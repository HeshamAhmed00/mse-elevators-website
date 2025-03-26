<?php



// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form inputs
    $name     = htmlspecialchars(trim($_POST['name']));
    $email    = htmlspecialchars(trim($_POST['email']));
    $phone    = htmlspecialchars(trim($_POST['phone']));
    $company  = isset($_POST['company']) ? htmlspecialchars(trim($_POST['company'])) : '';
    $product  = htmlspecialchars(trim($_POST['product_type']));
    $message  = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone) || empty($product) || empty($message)) {
        echo "Please fill in all the required fields.";
        exit;
    }

    // Email configuration
    $to      = "heshamahmed3131@gmail.com"; // Replace with your email
    $subject = "New Quote Request from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email content
    $email_body  = "You received a new quote request:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    if (!empty($company)) {
        $email_body .= "Company: $company\n";
    }
    $email_body .= "Product Interested In: $product\n";
    $email_body .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you! Your request has been sent successfully.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
