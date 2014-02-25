function Controller() {
    function setdata() {
        Alloy.Globals.role_id = Alloy.Globals.getEventResults[0].roleId;
        Alloy.Globals.role_name = Alloy.Globals.getEventResults[0].roleName;
        var data = [];
        for (var i = 0; Alloy.Globals.getEventResults.length > i; i++) {
            data[i] = Alloy.createController("eventsRow", {
                eventName: Alloy.Globals.getEventResults[i].eventSubject,
                eventDescription: Alloy.Globals.getEventResults[i].eventBody,
                eventDate: Alloy.Globals.getEventResults[i].eventDate
            }).getView();
            $.eventList.appendRow(data[i]);
        }
    }
    function loadAddEvent() {
        var win = Alloy.createController("addevent").getView();
        win.open();
        $.eventsWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "events";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.eventsWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "eventsWin"
    });
    $.__views.eventsWin && $.addTopLevelView($.__views.eventsWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.eventsWin.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    try {
        $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    } catch (e) {
        __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] = true;
    }
    $.__views.groupName = Ti.UI.createLabel({
        text: "Events for group name",
        id: "groupName"
    });
    $.__views.header.add($.__views.groupName);
    $.__views.groupImage = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/groupImage.png",
        id: "groupImage"
    });
    $.__views.header.add($.__views.groupImage);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "Add New Event",
        top: "10",
        width: "75%",
        id: "__alloyId5"
    });
    $.__views.eventsWin.add($.__views.__alloyId5);
    loadAddEvent ? $.__views.__alloyId5.addEventListener("click", loadAddEvent) : __defers["$.__views.__alloyId5!click!loadAddEvent"] = true;
    $.__views.eventList = Ti.UI.createTableView({
        top: "10",
        id: "eventList"
    });
    $.__views.eventsWin.add($.__views.eventList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var getEventsReq = Titanium.Network.createHTTPClient();
    getEventsReq.onload = function() {
        var json = this.responseText;
        var response = JSON.parse(json);
        if ("no events" != response) {
            Alloy.Globals.getEventResults = response;
            setdata();
        } else {
            var row = Titanium.UI.createTableViewRow();
            var view = Titanium.UI.createView({
                backgroundColor: "red",
                height: 50
            });
            row.height = "auto";
            var label = Ti.UI.createLabel({
                text: "There are no events."
            });
            view.add(label);
            row.add(view);
            $.eventList.appendRow(row);
        }
    };
    getEventsReq.open("POST", "http://sheffieldbears.com/teamsync/getEvents.php");
    var params = {
        userId: Alloy.Globals.user_id,
        groupId: Alloy.Globals.group_id
    };
    getEventsReq.send(params);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId5!click!loadAddEvent"] && $.__views.__alloyId5.addEventListener("click", loadAddEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;