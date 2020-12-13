<?php

header('Access-Control-Allow-Origin: *');
error_reporting(0);

// get values from client
$email = $_POST["email"];
$fullName = $_POST["full_name"];
$description = $_POST["description"];
$subject = $_POST["subject"];

// to send email
require("PHPMailer_5.2.4/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP(); // set mailer to use SMTP
$mail->SMTPDebug  = 0;

include "mail-config.php";

$mail->AddAddress("admin@mixspace.xyz", "");

$mail->WordWrap = 50; // set word wrap

$mail->IsHTML(true); // set email format to HTML

$mail->Subject = "Contact Form - MixSpace Internet Services";

$mail->Body = "Hey Danny!<br><br>You have a new contact for submission on MixSpace.<br>" . $email . "<br>" . $fullName . "<br>" . $subject ."<br>" . $description . "<br><br><small>via contact form on mixspace.xyz<br>MixSpace Internet Services</small>";

if ($mail->Send()) {
    echo json_encode("request-success");
} else {
    echo json_encode("request-fail");
}

$conn->close();
