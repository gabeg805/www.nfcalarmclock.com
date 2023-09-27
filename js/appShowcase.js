// Define images and index
var images = [];
var i = 0;

images[0] = "../images/new_home.png";
images[1] = "../images/new_home_expanded.png";
images[2] = "../images/new_customize.png";
//images[3] = "../images/Phone_Screenshot_Dismiss.png";
//images[4] = "../images/Phone_Screenshot_Swipe_v2.png";

// Show the next image of the app
function showNextImage()
{
	i = (i === images.length - 1) ? 0 : i + 1;

	document.getElementById("app-showcase").src = images[i];
}

// Start the app showcase
function startAppShowcase()
{
	setInterval(showNextImage, 4000);
}

