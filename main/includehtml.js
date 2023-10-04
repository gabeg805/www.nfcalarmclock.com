function includeHtml(id, url)
{
	$(document).ready(function()
	{
		$(id).load(url);
	});
}

