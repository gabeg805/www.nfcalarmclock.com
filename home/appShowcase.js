// Define images and index
var images = [];
var i = 0;

images[0] = "../home/img/new_home.png";
images[1] = "../home/img/new_home_expanded.png";
images[2] = "../home/img/new_customize.png";
//images[3] = "../home/img/Phone_Screenshot_Dismiss.png";
//images[4] = "../home/img/Phone_Screenshot_Swipe_v2.png";

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

