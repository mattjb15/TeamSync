
//only accounts for one available role atm.
var row = Ti.UI.createPickerRow();
row.title = Alloy.Globals.role_name;
$.column1.addRow(row);


function addNotice(e)
{
    if ($.noticeName.value == '')  
    { 
    	$.noticeName.value = "Untitled";
    }
    
    if ($.noticeName.value && $.noticeDescription.value != '')  
    {  
        var date = new Date();
        var stringDate = date.toString();
        var cleansedDate = stringDate.split("GMT");
        
        
        
        addNoticeReq.open("POST","http://sheffieldbears.com/teamsync/addNotice.php");  
        var params = {  
            roleName: $.picker.getSelectedRow(0).title,
            noticeName: $.noticeName.value,  
            noticeDescription: $.noticeDescription.value,
            noticeDate: cleansedDate[0], //add Date
            groupId: Alloy.Globals.group_id
        };  
        addNoticeReq.send(params); 
    }  
    else  
    {  
        alert("Notice Incomplete!");  
    }  
}

var addNoticeReq = Titanium.Network.createHTTPClient();  
addNoticeReq.onload = function()  
{    
    if (this.responseText)  
    {  
        alert(this.responseText);
        $.addNoticeWin.close();
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
