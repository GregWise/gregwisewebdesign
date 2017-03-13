<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data


//Google Recaptcha
if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcjXxgUAAAAANzFSVq6MzoiDidKj2iuuHQgFSmr&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);


// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty($_POST['email']))
		$errors['email'] = 'Email is required.';

	if (empty($_POST['textarea']))
		$errors['textarea'] = 'Message is required.';
    
// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;   
	}
  else {

		// if there are no errors process our form, then return a message

		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = "Thank you for the message! We'll be in touch.";
    
    $emailTo = 'greg@gregwisewebdesign.ca';
 
    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['name']));
    $message = addslashes(trim($_POST['textarea']));
    
    mail($emailTo, $subject . "Greg Wise Web Design - Contact Form", "From:" . $clientEmail, $message, $headers);
	// return all our data to an AJAX call
	}

	echo json_encode($data);