//get password put it into pass

var getPassReq = Titanium.Network.createHTTPClient();  
getPassReq.onload = function()  
{    
    if (this.responseText)  
    {
	Alloy.Globals.pass = this.responseText.trim();
    }
    else  
    {  
        alert("ERROR");  
    }  
}; 


getPassReq.open("POST","http://sheffieldbears.com/teamsync/getPass.php");  
        	var params = {
				userId: Alloy.Globals.user_id
        	};  
        	getPassReq.send(params); 



function updateOptions(e)
{
	var currentPassHash = Ti.Utils.md5HexDigest($.currentPassword.value);
    if (currentPassHash != Alloy.Globals.pass)
    { 
    	alert("Incorrect Password!"); 
    }
    else
    {
    	Alloy.Globals.pass = "";
    	if ($.password.value != "")  
    	{
    		var newPassHash = Ti.Utils.md5HexDigest($.password.value);
    	}
    	else
    	{
    		var newPassHash = "";
    	}
    	
    	if ($.password.value == $.confirmPassword.value)  
    	{
    		updateOptionsReq.open("POST","http://sheffieldbears.com/teamsync/updateOptions.php");  
        	var params = {
        	userId: Alloy.Globals.user_id,
        	firstName: $.firstName.value,
			lastName: $.lastName.value,
        	password: newPassHash
        	};  
        	updateOptionsReq.send(params); 
    	}  
    }
}


var updateOptionsReq = Titanium.Network.createHTTPClient();  
updateOptionsReq.onload = function()  
{    
    if (this.responseText)  
    {  
        alert(this.responseText);
        $.useroptionsWin.close();
		var win = Alloy.createController("homepage").getView();
		win.open();
    }
    else  
    {  
        alert(this.responseText);  
    }  
}; 

