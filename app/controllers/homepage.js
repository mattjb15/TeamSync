$.welcomeMessage.text = "Welcome " + Alloy.Globals.username;



var getGroupsReq = Titanium.Network.createHTTPClient();  
getGroupsReq.onload = function()  
{    
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response != "no groups")  
    {  
		Alloy.Globals.getGroupResults=response;
		setdata();
    }	
    else  
    {  
        var row = Titanium.UI.createTableViewRow();
		var view = Titanium.UI.createView({
  			backgroundColor:'red',
  			height: 50
			});
		row.height = 'auto';
		var label = Ti.UI.createLabel({text: 'You are not a member of any groups.'});
		view.add(label);
		row.add(view);
        $.mainList.appendRow(row);  
    }  
};

getGroupsReq.open("POST","http://sheffieldbears.com/teamsync/getGroups.php");  
        var params = {  
            userId: Alloy.Globals.user_id
        };  
getGroupsReq.send(params); 

function setdata()
{
	var data = [];
	for (var i = 0; i < Alloy.Globals.getGroupResults.length; i++) 
	{
    	data[i] = Alloy.createController('homepageRow',{
    									groupId: Alloy.Globals.getGroupResults[i].groupId,
                                        groupName: Alloy.Globals.getGroupResults[i].groupName,
                                        groupDescription: Alloy.Globals.getGroupResults[i].groupDescription
                                		}).getView(); 
		$.mainList.appendRow(data[i]);
	}
	//$.mainList.setData(data);
}

function loadaddgroup(e)
{
	var win = Alloy.createController("addeditgroup").getView();
	win.open();
	$.homepageWin.close();
}

function loaduseroptions(e)
{
	var win = Alloy.createController("useroptions").getView();
	win.open();
	Alloy.Globals.closeHomepage();
}

function loadmemberlist(e)
{
	var win = Alloy.createController("memberlist").getView();
	win.open();
	$.homepageWin.close();
}