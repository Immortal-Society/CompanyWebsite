
$(document).ready(function(){
	//can delete this when need to be
	var mobile = true;
	var width = $(document).width();
	if(width > 1279)
		mobile = false;
	$(window).on("resize",function(){
		width = $(document).width();
		if(width > 1279)
		{
			mobile = false;

		}
		else
		{
			mobile = true;
		}
	});
	$(document).click(function(e)
	{
		var menu = $(".menu");
		var icon = $(".icon");
		if (!icon.is(e.target)&& icon.has(e.target).length === 0&& !menu.is(e.target) // The target of the click isn't the container.
		&& menu.has(e.target).length === 0) // Nor a child element of the container
		{
			menu.attr("id","close");
		}
	});
	$(".icon").click(function(){
		var menu = $(".menu");
		menu.attr("id","open");
		
	});
	$(".closeBtn").click(function(){
		var menu = $(".menu");
		menu.attr("id","close");
	});
});   