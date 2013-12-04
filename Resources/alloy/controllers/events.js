function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "events";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.events = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "events"
    });
    $.__views.events && $.addTopLevelView($.__views.events);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.events.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.groupName = Ti.UI.createLabel({
        text: "Events for group name",
        id: "groupName"
    });
    $.__views.header.add($.__views.groupName);
    $.__views.groupImage = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/placeholder.png",
        id: "groupImage"
    });
    $.__views.header.add($.__views.groupImage);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId14"
    });
    var __alloyId15 = [];
    __alloyId15.push($.__views.__alloyId14);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Event Name",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: "5dp",
        text: "Event description Event description Event description",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId18"
    });
    $.__views.__alloyId14.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        left: "5dp",
        text: "Date:",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        left: "5dp",
        text: "12/12/2013",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId13 = Ti.UI.createTableView({
        data: __alloyId15,
        id: "__alloyId13"
    });
    $.__views.events.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;