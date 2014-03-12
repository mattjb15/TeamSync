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

function loadGroupSettings(e)
{
	Alloy.Globals.group_id = args.groupId;
	var win = Alloy.createController("groupsettings").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}

function loadGroupHomepage(e)
{
	Alloy.Globals.group_id = args.groupId;
	Alloy.Globals.group_name = args.groupName;
	Alloy.Globals.group_description = args.groupDescription;
	var win = Alloy.createController("groupHomepage").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}