function clickSignup(e)
{  

    if ($.username.value != '' && $.password.value != '' && $.confirmPassword.value != '' && $.firstName.value != '' && $.lastName.value != '' && $.emailAddress.value != '')  
    {  
        if ($.password.value != $.confirmPassword.value)  
        {  
            alert("Your passwords do not match");  
        }  
        else  
        {  
            if (!checkemail($.emailAddress.value))  
            {  
                alert("Please enter a valid email");  
            }  
            else  
            {  
                createReq.open("POST","http://sheffieldbears.com/teamsync/signup.php");  
                var params = {  
                    username: $.username.value,  
                    password: Ti.Utils.md5HexDigest($.password.value),  
                    firstName: $.firstName.value,
                    lastName: $.lastName.value,  
                    emailAddress: $.emailAddress.value  
                };  
                createReq.send(params); 
            }  
        }  
    }  
    else  
    {  
        alert("All fields are required");  
    }  
};


var createReq = Titanium.Network.createHTTPClient();  
createReq.onload = function()  
{  
    if (this.responseText == "Registration failed." || this.responseText == "That username or email already exists")  
    {   
        alert(this.responseText);  
    }  
    else  
    {   
		var alertDialog = Titanium.UI.createAlertDialog({  
            title: 'Alert',  
            message: this.responseText,  
            buttonNames: ['OK']  
        });
        alertDialog.addEventListener('click',function(e)  
		{  
			var win = Alloy.createController("signin").getView();
			win.open();
			$.signupWin.close();
		});
        alertDialog.show();
    }  
};


var testresults;  
function checkemail(emailAddress)  
{  
    var str = emailAddress;  
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  
    if (filter.test(str))  
    {  
        testresults = true;  
    }  
    else  
    {  
        testresults = false;  
    }  
    return (testresults);  
};  
