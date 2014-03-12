if(Alloy.Globals.group_name)
{
	$.groupName.text = "Group Picture";
	$.pageTitle.text = Alloy.Globals.group_name;
}

if(Alloy.Globals.group_description)
{
	$.groupDescription.text = Alloy.Globals.group_description;
}

function loadGroupEvents(e)
{
	var win = Alloy.createController("events").getView();
	win.open();
	Alloy.Globals.closeGroupHomepage();
}

function loadGroupNotices(e)
{
	var win = Alloy.createController("notices").getView();
	win.open();
	Alloy.Globals.closeGroupHomepage();
}

function loadGroupSettings(e)
{
	var win = Alloy.createController("groupsettings").getView();
	win.open();
	Alloy.Globals.closeGroupHomepage();
}

function loadMemberlist(e)
{
	var win = Alloy.createController("memberlist").getView();
	win.open();
	Alloy.Globals.closeGroupHomepage();
}