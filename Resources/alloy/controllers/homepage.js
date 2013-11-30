function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homepage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homepage = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "homepage"
    });
    $.__views.homepage && $.addTopLevelView($.__views.homepage);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "blue",
        id: "header"
    });
    $.__views.homepage.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/placeholder.png",
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
        backgroundImage: "/placeholder.png",
        id: "avatar"
    });
    $.__views.header.add($.__views.avatar);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    var __alloyId14 = [];
    __alloyId14.push($.__views.__alloyId13);
    $.__views.__alloyId15 = Ti.UI.createView({
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    $.__views.searchIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "5",
        backgroundImage: "/placeholder.png",
        id: "searchIcon"
    });
    $.__views.__alloyId15.add($.__views.searchIcon);
    $.__views.searchLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "40",
        text: "Search",
        id: "searchLabel"
    });
    $.__views.__alloyId15.add($.__views.searchLabel);
    $.__views.invitesIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "145",
        backgroundImage: "/placeholder.png",
        id: "invitesIcon"
    });
    $.__views.__alloyId15.add($.__views.invitesIcon);
    $.__views.invitesLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "180",
        text: "Invites",
        id: "invitesLabel"
    });
    $.__views.__alloyId15.add($.__views.invitesLabel);
    $.__views.addGroupIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "280dp",
        backgroundImage: "/placeholder.png",
        id: "addGroupIcon"
    });
    $.__views.__alloyId15.add($.__views.addGroupIcon);
    $.__views.addGroupLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "315dp",
        text: "Add Group",
        id: "addGroupLabel"
    });
    $.__views.__alloyId15.add($.__views.addGroupLabel);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId16"
    });
    __alloyId14.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.topRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "topRowContainer"
    });
    $.__views.__alloyId17.add($.__views.topRowContainer);
    $.__views.groupSettings = Ti.UI.createLabel({
        left: "10dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Group Settings",
        id: "groupSettings"
    });
    $.__views.topRowContainer.add($.__views.groupSettings);
    $.__views.settingsImage = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        backgroundColor: "grey",
        id: "settingsImage"
    });
    $.__views.topRowContainer.add($.__views.settingsImage);
    $.__views.joinRequests = Ti.UI.createLabel({
        left: "10dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Join Requests",
        id: "joinRequests"
    });
    $.__views.topRowContainer.add($.__views.joinRequests);
    $.__views.numberOfJoinRequests = Ti.UI.createLabel({
        left: "20dp",
        text: "1",
        id: "numberOfJoinRequests"
    });
    $.__views.topRowContainer.add($.__views.numberOfJoinRequests);
    $.__views.middleRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "middleRowContainer"
    });
    $.__views.__alloyId17.add($.__views.middleRowContainer);
    $.__views.groupImage = Ti.UI.createView({
        width: "60dp",
        height: "60dp",
        backgroundColor: "grey",
        left: "5dp",
        id: "groupImage"
    });
    $.__views.middleRowContainer.add($.__views.groupImage);
    $.__views.innerMiddleContainer = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: "20dp",
        id: "innerMiddleContainer"
    });
    $.__views.middleRowContainer.add($.__views.innerMiddleContainer);
    $.__views.GroupNameLabel = Ti.UI.createLabel({
        left: "5",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Group Name",
        id: "GroupNameLabel"
    });
    $.__views.innerMiddleContainer.add($.__views.GroupNameLabel);
    $.__views.GroupDescriptionLabel = Ti.UI.createLabel({
        text: "Some Made up group description text",
        id: "GroupDescriptionLabel"
    });
    $.__views.innerMiddleContainer.add($.__views.GroupDescriptionLabel);
    $.__views.bottomRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "bottomRowContainer"
    });
    $.__views.__alloyId17.add($.__views.bottomRowContainer);
    $.__views.events = Ti.UI.createLabel({
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Events",
        id: "events"
    });
    $.__views.bottomRowContainer.add($.__views.events);
    $.__views.notices = Ti.UI.createLabel({
        left: "10dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Notices",
        id: "notices"
    });
    $.__views.bottomRowContainer.add($.__views.notices);
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId14,
        id: "mainList"
    });
    $.__views.homepage.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;