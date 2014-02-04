

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

function loadAddeditgroup(e)
{
	var win =Alloy.createController("addeditgroup").getView();
	win.open();
	
}

function loadSignup(e)
{
	var win =Alloy.createController("signup").getView();
	win.open();
	
}

function loadAddEvent(e)
{
	var win =Alloy.createController("addevent").getView();
	win.open();
	
}

function loadAddNotice(e)
{
	var win =Alloy.createController("addnotice").getView();
	win.open();
	
}

function loadNotices(e)
{
	var win =Alloy.createController("notices").getView();
	win.open();
	
}

$.index.open();
loadLogin();
