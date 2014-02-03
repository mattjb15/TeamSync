var args = arguments[0] || {};

$.GroupNameLabel.text = args.groupName;
$.GroupDescriptionLabel.text = args.groupDescription;

function loadGroupEvents(e)
{
	var win = Alloy.createController("groupEvents").getView();
	win.open();
	$.homepageWin.close();
}

function loadGroupNotices(e)
{
	var win = Alloy.createController("groupNotices").getView();
	win.open();
	$.homepageWin.close();
}