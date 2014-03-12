function loadMemberSearch(e)
{
	var win = Alloy.createController("membersearch").getView();
	win.open();
	$.membersearchWin.close();
}
 