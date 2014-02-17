var args = arguments[0] || {};

$.GroupNameLabel.text = args.groupName;
$.GroupDescriptionLabel.text = args.groupDescription;

function loadGroupEvents(e)
{
	Alloy.Globals.group_id = args.groupId;
	var win = Alloy.createController("events").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}

function loadGroupNotices(e)
{
	Alloy.Globals.group_id = args.groupId;
	var win = Alloy.createController("notices").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}