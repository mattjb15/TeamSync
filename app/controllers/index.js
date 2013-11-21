function loadLogin(e)
{
	var win =Alloy.createController("signin").getView();
	win.open();
	
}

function loadHomepage(e)
{
	var win =Alloy.createController("homepage").getView();
	win.open();
	
}


$.index.open();
