<!doctype html>
<html> 

	<head>
		
		<title>Message sent</title>
		
			<meta name="description" content="Sent form message">
			<meta name="keywords" content="HTML,CSS,XML,JavaScript">
			<meta name="author" content="Jason Kincaid">
			<meta charset="UTF-8">
			<link rel="shortcut icon" href="images/favIcon.png">
			<link rel="stylesheet" type="text/css" href="guess/guess.css"/>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
			<script type="text/javascript" src="guess/guess.js"></script>
	</head>
	
<body>
	
<div id="wrapper">

	<header>
		<img src="images/header.png">
	</header>
	
	<nav>
		<a href="index.html">Home</a>

	</nav>
	
	<section>
	
	
		
		<div id="game">
			<p id="output">
				<?php

				$fullName = $_POST['fullName'];
				$email = $_POST['email'];
				$message = $_POST['message'];
				$to = "jasonkincaid01@gmail.com";
				$subject = "New form message";

				mail ($to, $subject, $message, "From, " . $fullName . " " . $email);
				echo "Thanks for the message, I'll get back to you as soon as I can.";


				?>
			</p>
		</div>
		<!--End of Game-->
			
	</section>		
	
	
	<footer>
		&copy; Copyright 2016, Jason Kincaid.
	</footer>
	
</div>
<!--end of wrapper-->
</body>
</html>






