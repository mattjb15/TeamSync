var getNoticesReq = Titanium.Network.createHTTPClient();  
getNoticesReq.onload = function()  
{    
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response != "no notices")  
    {  
		Alloy.Globals.getNoticeResults=response;
		setdata();
    }	
    else  
    {  
        var row = Titanium.UI.createTableViewRow();
		var view = Titanium.UI.createView({
  			backgroundColor:'red',
  			height: 50
			});
		row.height = 'auto';
		var label = Ti.UI.createLabel({text: 'There are no notices.'});
		view.add(label);
		row.add(view);
        $.noticeList.appendRow(row);  
    }  
};

getNoticesReq.open("POST","http://sheffieldbears.com/teamsync/getNotices.php");  
        var params = {  
            userId: Alloy.Globals.user_id,
            groupId: Alloy.Globals.group_id
        };  
getNoticesReq.send(params); 

function setdata()
{
	var data = [];
	for (var i = 0; i < Alloy.Globals.getNoticeResults.length; i++) 
	{
    	data[i] = Alloy.createController('noticesRow',{
                                        noticeName: Alloy.Globals.getNoticeResults[i].noticeSubject,
                                        noticeDescription: Alloy.Globals.getNoticeResults[i].noticeBody,
                                        noticeDate: Alloy.Globals.getNoticeResults[i].noticeDate
                                		}).getView();   // is this a hack? $model is the internal reference to the current model
		$.noticeList.appendRow(data[i]);
	}
	//$.mainList.setData(data);
}


function loadAddNotice(e)
{
	var win = Alloy.createController("addnotice").getView();
	win.open();
	$.noticesWin.close();
}

