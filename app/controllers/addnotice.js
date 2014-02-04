function addNotice(e)
{
    if ($.noticeName.value == '')  
    { 
    	$.noticeName.value = "Untitled";
    }
    
    if ($.noticeName.value && $.noticeDescription.value != '')  
    {  
        var date = new Date();
        
        addNoticeReq.open("POST","http://sheffieldbears.com/teamsync/addNotice.php");  
        var params = {  
            roleId: "2", //hack - use 1 as constant until fixed
            noticeName: $.noticeName.value,  
            noticeDescription: $.noticeDescription.value,
            noticeDate: date //add Date
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
        var alertDialog = Titanium.UI.createAlertDialog({  
            title: 'Alert',  
            message: this.responseText,  
            buttonNames: ['OK']  
        });
        alertDialog.addEventListener('click',function(e)  
		{  
			onSuccess();
		});
        alertDialog.show();
    }
    else  
    {  
        alert(this.responseText);  
    }  
}; 

function onSuccess(e)
{
	$.addGroupWin.close();
	var win =Alloy.createController("homepage").getView();
	win.open();
}