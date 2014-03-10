var args = arguments[0] || {};

var txt="";
txt = args.names.username;
var userID = args.names.id;
var groupID = 23;


$.name.text = txt;

function inviteUser(e) {
	var response;
	var url = "http://192.168.0.21/teamsync/inviteuser.php?user_id="+userID+"&group_id="+groupID;
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			loadMemberSearch();
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();

}

function loadMemberSearch()
{
	var win = Alloy.createController("homepage").getView();
	win.open();
}





