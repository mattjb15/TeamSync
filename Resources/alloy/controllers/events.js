function Controller() {
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
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "Add New Event",
        top: "10",
        width: "75%",
        id: "__alloyId13"
    });
    $.__views.eventsWin.add($.__views.__alloyId13);
    loadAddEvent ? $.__views.__alloyId13.addEventListener("click", loadAddEvent) : __defers["$.__views.__alloyId13!click!loadAddEvent"] = true;
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId15"
    });
    var __alloyId16 = [];
    __alloyId16.push($.__views.__alloyId15);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Event Name",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        left: "5dp",
        text: "Event description Event description Event description",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId19"
    });
    $.__views.__alloyId15.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        left: "5dp",
        text: "Date:",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        left: "5dp",
        text: "12/12/2013",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId14 = Ti.UI.createTableView({
        data: __alloyId16,
        top: "10",
        id: "__alloyId14"
    });
    $.__views.eventsWin.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId13!click!loadAddEvent"] && $.__views.__alloyId13.addEventListener("click", loadAddEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;