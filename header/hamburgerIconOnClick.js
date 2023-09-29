var isSidebarOpen = false;

function myFunction(x)
{
	x.classList.toggle("change");

	if (isSidebarOpen)
	{
		closeNav();
	}
	else
	{
		openNav();
	}

}

/* Set the height of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	isSidebarOpen = true;
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("main").style.opacity = "0.3";
}

/* Set the height of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	isSidebarOpen = false;
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.opacity = "1";
}

