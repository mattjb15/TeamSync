$.pageTitle.text = Alloy.Globals.group_name;



var getEventsReq = Titanium.Network.createHTTPClient();  
getEventsReq.onload = function()  
{    
    var json = this.responseText;  
    var response = JSON.parse(json);
    if (response != "no events")  
    {  
		Alloy.Globals.getEventResults=response;
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
		var label = Ti.UI.createLabel({text: 'There are no events.'});
		view.add(label);
		row.add(view);
        $.eventList.appendRow(row);  
    }  
};

getEventsReq.open("POST","http://sheffieldbears.com/teamsync/getEvents.php");  
        var params = {  
            userId: Alloy.Globals.user_id,
            groupId: Alloy.Globals.group_id
        };  
getEventsReq.send(params); 

function setdata()
{
	Alloy.Globals.role_id = Alloy.Globals.getEventResults[0].roleId;
	Alloy.Globals.role_name = Alloy.Globals.getEventResults[0].roleName;
	
	var data = [];
	for (var i = 0; i < Alloy.Globals.getEventResults.length; i++) 
	{
    	data[i] = Alloy.createController('eventsRow',{
                                        eventName: 			Alloy.Globals.getEventResults[i].eventSubject,
                                        eventDescription: 	Alloy.Globals.getEventResults[i].eventBody,
                                        eventDate: 			Alloy.Globals.getEventResults[i].eventDate
                                		}).getView();
		$.eventList.appendRow(data[i]);
	}
}


function loadGroupHomepage(e)
{
	var win = Alloy.createController("groupHomepage").getView();
	win.open();
	$.eventsWin.close();
}



function loadAddEvent(e)
{
	var win = Alloy.createController("addevent").getView();
	win.open();
	$.eventsWin.close();
}
