$.groupname.text = "Test Bears"; // read group name from database

//read from roles table
//use results to build roles table


//only accounts for one available role atm.

var getRolesReq = Titanium.Network.createHTTPClient();  
getRolesReq.onload = function()  
{    
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response != "no roles")  
    {  
		Alloy.Globals.getRoleResults=response;
		setRoles();
    }  
};

getRolesReq.open("POST","http://sheffieldbears.com/teamsync/getGroupRoles.php");  
        var params = {  
            groupId: Alloy.Globals.group_id
        };  
getRolesReq.send(params); 

function setRoles()
{
	var data = [];
	for (var i = 0; i < Alloy.Globals.getRoleResults.length; i++) 
	{
		var row = Titanium.UI.createTableViewRow();
		row.id = "role"+i;
		row.title = Alloy.Globals.getRoleResults[i].roleName;
		$.sectionFruit.add(row);
	}
}


function addRole(e)
{
    if ($.addRole.value == '')  
    { 
    	alert("No role name given");
    }
    else  
    {  
        addRoleReq.open("POST","http://sheffieldbears.com/teamsync/addRole.php");  
        var params = {  
            roleName: $.addRole.value,
            groupId: Alloy.Globals.group_id
        };  
        addRoleReq.send(params); 
    }  
}

var addRoleReq = Titanium.Network.createHTTPClient();  
addRoleReq.onload = function()  
{    
    if (this.responseText)  
    {  
        alert(this.responseText);
        $.groupSettingsWin.close();
		var win =Alloy.createController("homepage").getView();
		win.open();
    }
    else  
    {  
        alert(this.responseText);  
    }  
}; 
