function doClick(e) {
	var result;
	var url = "http://192.168.0.21/teamsync/getusers.php?search_string=" + $.search.value;
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			var data = [];
			for (var i = 0; i < 5; i++) {
				data[i] = Alloy.createController('membersearchRow',{names:this.responseText}).getView();
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

/*
 function getResults() {
 var search_string = $.search.value;
 var url = "http://192.168.0.21/teamsync/getusers.php?search_string="+search_string;
 //var names;
 var client = Ti.Network.createHTTPClient({
 // function called when the response data is available
 onload : function(e) {
 Ti.API.info(this.responseText);
 //names = this.responseText;

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
 $.welcomeMessage.text = this.responseText;
 // var data = [];
 // for (var i = 0; i < 5; i++) {
 // data[i] = Alloy.createController('membersearchRow', {
 // names : names
 // }).getView();
 // $.mainList.appendRow(data[i]);
 // }

 }

 //$.membersearch.open();
 */