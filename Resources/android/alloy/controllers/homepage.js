function Controller() {
    function setdata() {
        var data = [];
        for (var i = 0; Alloy.Globals.getGroupResults.length > i; i++) {
            data[i] = Alloy.createController("homepageRow", {
                groupId: Alloy.Globals.getGroupResults[i].groupId,
                groupName: Alloy.Globals.getGroupResults[i].groupName,
                groupDescription: Alloy.Globals.getGroupResults[i].groupDescription
            }).getView();
            $.mainList.appendRow(data[i]);
        }
    }
    function loadaddgroup() {
        var win = Alloy.createController("addeditgroup").getView();
        win.open();
        $.homepageWin.close();
    }
    function loaduseroptions() {
        var win = Alloy.createController("useroptions").getView();
        win.open();
        Alloy.Globals.closeHomepage();
    }
    function loadmemberlist() {
        var win = Alloy.createController("memberlist").getView();
        win.open();
        $.homepageWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homepage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homepageWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "homepageWin"
    });
    $.__views.homepageWin && $.addTopLevelView($.__views.homepageWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.homepageWin.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.welcomeMessage = Ti.UI.createLabel({
        text: "Welcome username",
        id: "welcomeMessage"
    });
    $.__views.header.add($.__views.welcomeMessage);
    $.__views.avatar = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/man-silhouette.png",
        id: "avatar"
    });
    $.__views.header.add($.__views.avatar);
    loaduseroptions ? $.__views.avatar.addEventListener("click", loaduseroptions) : __defers["$.__views.avatar!click!loaduseroptions"] = true;
    var __alloyId18 = [];
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        id: "__alloyId19"
    });
    __alloyId18.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.searchIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "1%",
        backgroundImage: "/Search-icon.png",
        id: "searchIcon"
    });
    $.__views.__alloyId20.add($.__views.searchIcon);
    $.__views.searchLabel = Ti.UI.createLabel({
        left: "10%",
        text: "Search",
        id: "searchLabel"
    });
    $.__views.__alloyId20.add($.__views.searchLabel);
    $.__views.invitesIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "30%",
        backgroundImage: "/Email-3-icon.png",
        id: "invitesIcon"
    });
    $.__views.__alloyId20.add($.__views.invitesIcon);
    $.__views.invitesLabel = Ti.UI.createLabel({
        left: "40%",
        text: "Invites",
        id: "invitesLabel"
    });
    $.__views.__alloyId20.add($.__views.invitesLabel);
    loadmemberlist ? $.__views.invitesLabel.addEventListener("click", loadmemberlist) : __defers["$.__views.invitesLabel!click!loadmemberlist"] = true;
    $.__views.addGroupIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "60%",
        backgroundImage: "/Plus-icon.png",
        id: "addGroupIcon"
    });
    $.__views.__alloyId20.add($.__views.addGroupIcon);
    loadaddgroup ? $.__views.addGroupIcon.addEventListener("click", loadaddgroup) : __defers["$.__views.addGroupIcon!click!loadaddgroup"] = true;
    $.__views.addGroupLabel = Ti.UI.createLabel({
        left: "70%",
        text: "Add Group",
        id: "addGroupLabel"
    });
    $.__views.__alloyId20.add($.__views.addGroupLabel);
    loadaddgroup ? $.__views.addGroupLabel.addEventListener("click", loadaddgroup) : __defers["$.__views.addGroupLabel!click!loadaddgroup"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId18,
        id: "mainList"
    });
    $.__views.homepageWin.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.welcomeMessage.text = "Welcome " + Alloy.Globals.username;
    var getGroupsReq = Titanium.Network.createHTTPClient();
    getGroupsReq.onload = function() {
        var json = this.responseText;
        var response = JSON.parse(json);
        if ("no groups" != response) {
            Alloy.Globals.getGroupResults = response;
            setdata();
        } else {
            var row = Titanium.UI.createTableViewRow();
            var view = Titanium.UI.createView({
                backgroundColor: "red",
                height: 50
            });
            row.height = "auto";
            var label = Ti.UI.createLabel({
                text: "You are not a member of any groups."
            });
            view.add(label);
            row.add(view);
            $.mainList.appendRow(row);
        }
    };
    getGroupsReq.open("POST", "http://sheffieldbears.com/teamsync/getGroups.php");
    var params = {
        userId: Alloy.Globals.user_id
    };
    getGroupsReq.send(params);
    __defers["$.__views.avatar!click!loaduseroptions"] && $.__views.avatar.addEventListener("click", loaduseroptions);
    __defers["$.__views.invitesLabel!click!loadmemberlist"] && $.__views.invitesLabel.addEventListener("click", loadmemberlist);
    __defers["$.__views.addGroupIcon!click!loadaddgroup"] && $.__views.addGroupIcon.addEventListener("click", loadaddgroup);
    __defers["$.__views.addGroupLabel!click!loadaddgroup"] && $.__views.addGroupLabel.addEventListener("click", loadaddgroup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;