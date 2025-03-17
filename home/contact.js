// AWS API website
let awsApiWebsite = "https://nooypgt7c6.execute-api.us-east-1.amazonaws.com/production/contact";

// Elements that will be used later
let emailElement = document.getElementById("userEmail");
let messageElement = document.getElementById("userMessage");
let contactSendButton = document.getElementById("contact-send");
let contactSuccessFeedback = document.getElementById("contact-success-feedback");
let contactFailureFeedback = document.getElementById("contact-failure-feedback");
let contactEmptyFeedback = document.getElementById("contact-empty-feedback");
let fontAwesomeIcon = contactSendButton.getElementsByClassName("fa")[0];

// Sending status icon classes
let sendActiveClass = "is-sending";
let loadingIconClasses = ["fa-spinner", "fa-spin"];
let successIconClass = "fa-check";
let failureIconClass = "fa-exclamation-circle";

// 
// Send an email via the AWS API
// 
function sendEmailToAwsApi(event)
{
	// Prevent button from submitting a form/following URL?
	event.preventDefault();

	// Check if the email or message are invalid
	let emailStatus = checkEmailValidity();
	let messageStatus = checkMessageValidity();

	if (!emailStatus || !messageStatus)
	{
		return false;
	}

	// Package data in json format
	let data = {
		email   : emailElement.value,
		message : messageElement.value
	};

	// Create an HTTP request
	let xmlHttp = new XMLHttpRequest();

	// Setup and send the HTTP request
	xmlHttp.open("POST", awsApiWebsite);
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify(data));

	addLoadingIcon();

	// Handler function for when the ready state changes
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState === 4)
		{
			let response = JSON.parse(xmlHttp.responseText);

			if (xmlHttp.status === 200)
			{
				showSuccessMessage();
				removeLoadingIcon();
			}
			else
			{
				showFailureMessage();
				removeLoadingIcon();
			}
		}
	}

}

// 
// Add the loading icon when the message is sending.
// 
function addLoadingIcon()
{
	// Indicate that sending of message is active
	contactSendButton.classList.add(sendActiveClass);

	// Add the loading icon classes
	loadingIconClasses.forEach(function (c) {
		fontAwesomeIcon.classList.add(c);
	});
}

// 
// Check validity of the email the user has entered.
// 
function checkEmailValidity()
{
	// Get email
	let email = emailElement.value;

	// Check if it is valid
	let isValid = isEmailValid(email);

	// Set the validity class list
	setEmailValidityClassList(isValid);

	return isValid;
}

// 
// Check validity of the message the user has entered.
// 
function checkMessageValidity()
{
	// Get message
	let message = messageElement.value;

	// Check if it is valid
	let isValid = isMessageValid(message);

	// Set the validity class list
	setMessageValidityClassList(isValid);

	return isValid;
}

// 
// Check if an email is valid.
// 
function isEmailValid(email)
{
	let isEmailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// Check email is not empty
	if (email == "")
	{
		return false;
	}
	// Check email format is valid
	else if(!isEmailValidRegex.test(email))
	{
		return false;
	}
	// Success
	else
	{
		return true;
	}
}

// 
// Check if a message is valid.
// 
function isMessageValid(message)
{
	// Check message
	if (message == "")
	{
		return false
	}
	// Success
	else
	{
		return true;
	}
}

// 
// Remove the loading icon
// 
function removeLoadingIcon()
{
	// Remove the loading icon classes
	loadingIconClasses.forEach(function (c) {
		fontAwesomeIcon.classList.remove(c);
	});
}

// 
// Set the class list of the email based on if it is valid or not.
// 
function setEmailValidityClassList(isValid)
{
	// Email is valid
	if (isValid)
	{
		// Remove invalid class
		emailElement.classList.remove("is-invalid");

		// Add valid class
		emailElement.classList.add("is-valid");
	}
	// Email is invalid
	else
	{
		// Add invalid class
		emailElement.classList.add("is-invalid");
	}
}

// 
// Set the class list of the message based on if it is valid or not.
// 
function setMessageValidityClassList(isValid)
{
	// Message is valid
	if (isValid)
	{
		// Remove invalid class
		messageElement.classList.remove("is-invalid");

		// Add valid class
		messageElement.classList.add("is-valid");
	}
	// Message is invalid
	else
	{
		// Add invalid class
		messageElement.classList.add("is-invalid");
	}
}

// 
// Show failure to send message.
// 
function showFailureMessage()
{
	// Set diplay style so failure message shows
	contactSuccessFeedback.style.display = "none";
	contactFailureFeedback.style.display = "block";
	contactEmptyFeedback.style.display = "none";
}

// 
// Show message sent successfully message.
// 
function showSuccessMessage()
{
	// Set diplay style so success message shows
	contactSuccessFeedback.style.display = "block";
	contactFailureFeedback.style.display = "none";
	contactEmptyFeedback.style.display = "none";
}

