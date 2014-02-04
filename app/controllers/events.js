function loadAddEvent(e)
{
	var win = Alloy.createController("addevent").getView();
	win.open();
	$.eventsWin.close();
}
