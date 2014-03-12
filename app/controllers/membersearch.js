function doClick(e) {
	var response;
	var url = "http://192.168.0.21/teamsync/getusers.php?search_string=" + $.search.value;
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			response = JSON.parse(this.responseText);
			Ti.API.info(response[0].firstName);
			Ti.API.info(response[1].firstName);
			Ti.API.info(response);
			
			var data = [];
			for (var i = 0; i < response.length; i++) {
				data[i] = Alloy.createController('membersearchRow',{names:response[i]}).getView();
				$.mainList.appendRow(data[i]);
			}

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

