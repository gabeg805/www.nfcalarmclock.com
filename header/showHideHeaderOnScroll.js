var previousScroll = 0;
var headerOrgOffset = $('#navbar').height();

$('#header').height($('#navbar').height());

// Call when the window is scrolled
$(window).scroll(function ()
{
	var currentScroll = $(this).scrollTop();

	if (currentScroll > headerOrgOffset)
	{
		if (currentScroll > previousScroll)
		{
			$('#header').slideUp();
		}
		else
		{
			$('#header').slideDown();
		}
	} 

	previousScroll = currentScroll;
});
