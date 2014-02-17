
//only accounts for one available role atm.
var row = Ti.UI.createPickerRow();
row.title = Alloy.Globals.role_name;
$.column1.addRow(row);


function addEvent(e)
{
    if ($.eventName.value == '')  
    { 
    	$.eventName.value = "Untitled Event";
    }
    
    if ($.eventName.value && $.eventDescription.value != '')  
    {  

        
        addEventReq.open("POST","http://sheffieldbears.com/teamsync/addEvent.php");  
        var params = {  
            roleName: $.picker.getSelectedRow(0).title,
            eventName: $.eventName.value,  
            eventDescription: $.eventDescription.value,
            eventDate: $.eventDate.value,  
            groupId: Alloy.Globals.group_id
        };  
        addEventReq.send(params); 
    }  
    else  
    {  
        alert("Event Incomplete!");  
    }  
}

var addEventReq = Titanium.Network.createHTTPClient();  
addEventReq.onload = function()  
{    
    if (this.responseText)  
    {  
        alert(this.responseText);
        $.addEventWin.close();
		var win =Alloy.createController("homepage").getView();
		win.open();
        /*
       	var testDialog = Titanium.UI.createAlertDialog({  
            title: 'Alerttest',  
            message: this.responseText,
            buttonNames: ['test'],
            cancel: 0 
        });
        testDialog.addEventListener('click',function(e)  
		{  
			testDialog.hide();
		});
        testDialog.show();
        */
    }
    else  
    {  
        alert(this.responseText);  
    }  
}; 
