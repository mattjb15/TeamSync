var args = arguments[0] || {};

$.GroupNameLabel.text = args.groupName;
$.GroupDescriptionLabel.text = args.groupDescription;

Alloy.Globals.group_id = args.groupId;

function loadGroupEvents(e)
{
	var win = Alloy.createController("events").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}

function loadGroupNotices(e)
{
	var win = Alloy.createController("notices").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}