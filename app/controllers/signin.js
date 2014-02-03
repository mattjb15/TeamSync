function loadSignup(e)
{
	var win = Alloy.createController("signup").getView();
	win.open();
	$.signinWin.close();
}
 
function login(e)  
{  
    if ($.username.value != '' && $.password.value != '')  
    {  
        loginReq.open("POST","http://sheffieldbears.com/teamsync/login.php");  
        var params = {  
            username: $.username.value,  
            password: Ti.Utils.md5HexDigest($.password.value) 
        };  
        loginReq.send(params); 
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
};
  
var loginReq = Titanium.Network.createHTTPClient();  
loginReq.onload = function()  
{  
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response.logged == true)  
    {  
		Alloy.Globals.username = response.username;
		Alloy.Globals.user_id = response.id;
		var win =Alloy.createController("homepage").getView();
		win.open();
		$.signinWin.close();
    }
     
    else  
    {  
        alert(response.message);  
    }  
};  
