function addGroup(e)
{
    if ($.GroupDescription.value == '')  
    { 
    	$.GroupDescription.value = "No Description";
    }
    
    if ($.GroupName.value != '')  
    {  
        addGroupReq.open("POST","http://sheffieldbears.com/teamsync/addGroup.php");  
        var params = {  
            userId: Alloy.Globals.user_id,
            groupName: $.GroupName.value,  
            groupDescription: $.GroupDescription.value
        };  
        addGroupReq.send(params); 
    }  
    else  
    {  
        alert("Group Name Required!");  
    }  
}

var addGroupReq = Titanium.Network.createHTTPClient();  
addGroupReq.onload = function()  
{    
    if (this.responseText)  
    {  
        var alertDialog = Titanium.UI.createAlertDialog({  
            title: 'Alert',  
            message: this.responseText,  
            buttonNames: ['OK']  
        });
        alertDialog.addEventListener('click',function(e)  
		{  
			$.addGroupWin.close();
			var win =Alloy.createController("homepage").getView();
			win.open();
		});
        alertDialog.show();
    }
    else  
    {  
        alert(this.responseText);  
    }  
}; 

