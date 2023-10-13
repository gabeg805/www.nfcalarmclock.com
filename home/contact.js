// 
// Send an email via the AWS API
// 
function sendEmailToAwsApi(event)
{
	// Prevent button from submitting a form/following URL?
	event.preventDefault();

	// Get user inputs
	let emailElement = document.getElementById("userEmail");
	let messageElement = document.getElementById("userMessage");
	let userEmail = emailElement.value;
	let userMessage = messageElement.value;

	// Helpers for validity checks
	let isEmailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var areElementsValid = true;

	// Check email is not empty
	if (userEmail == "")
	{
		// Indicate that the email is invalid
		emailElement.classList.add("is-invalid");
		areElementsValid = false;
	}
	// Check email is valid
	else if(!isEmailValidRegex.test(userEmail))
	{
		// Indicate that the email is invalid
		emailElement.classList.add("is-invalid");
		areElementsValid = false;
	}
	else
	{
		// Remove invalidity class if it is there
		emailElement.classList.remove("is-invalid");

		// Indicate that the email and message are valid
		emailElement.classList.add("is-valid");
	}

	// Check message
	if (userMessage == "")
	{
		// Indicate that the message is invalid
		messageElement.classList.add("is-invalid");
		areElementsValid = false;
	}
	else
	{
		// Remove invalidity class if it is there
		messageElement.classList.remove("is-invalid");

		// Indicate that the email and message are valid
		messageElement.classList.add("is-valid");
	}

	// Check if any elements were invalid
	if (!areElementsValid)
	{
		return false;
	}

	// Package data in json format
	let data = {
		email   : userEmail,
		message : userMessage
	};

	// Create an HTTP request
	let xmlHttp = new XMLHttpRequest();

	// Setup and send the HTTP request
	xmlHttp.open("POST", "https://nooypgt7c6.execute-api.us-east-1.amazonaws.com/production/contact");
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify(data));

	// Handler function for when the ready state changes
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState === 4)
		{
			let response = JSON.parse(xmlHttp.responseText);

			if (xmlHttp.status === 200)
			{
				console.log("Success!");
				// Show text saying success
				//document.getElementById("contact-form").innerHtml = "<h1>Thank you for your message!  I will get back to you as soon as I can.";
			}
			else
			{
				console.log("Failure");
			}
		}
	}

	//alert("Please enter a message.");
	// Reset the contact form
	//document.getElementById("contact-form").reset();
}

