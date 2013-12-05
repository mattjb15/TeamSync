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
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.homepage.add($.__views.header);
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
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        id: "__alloyId21"
    });
    var __alloyId22 = [];
    __alloyId22.push($.__views.__alloyId21);
    $.__views.__alloyId23 = Ti.UI.createView({
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.searchIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "1%",
        backgroundImage: "/Search-icon.png",
        id: "searchIcon"
    });
    $.__views.__alloyId23.add($.__views.searchIcon);
    $.__views.searchLabel = Ti.UI.createLabel({
        left: "10%",
        text: "Search",
        id: "searchLabel"
    });
    $.__views.__alloyId23.add($.__views.searchLabel);
    $.__views.invitesIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "30%",
        backgroundImage: "/Email-3-icon.png",
        id: "invitesIcon"
    });
    $.__views.__alloyId23.add($.__views.invitesIcon);
    $.__views.invitesLabel = Ti.UI.createLabel({
        left: "40%",
        text: "Invites",
        id: "invitesLabel"
    });
    $.__views.__alloyId23.add($.__views.invitesLabel);
    $.__views.addGroupIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "60%",
        backgroundImage: "/Plus-icon.png",
        id: "addGroupIcon"
    });
    $.__views.__alloyId23.add($.__views.addGroupIcon);
    $.__views.addGroupLabel = Ti.UI.createLabel({
        left: "70%",
        text: "Add Group",
        id: "addGroupLabel"
    });
    $.__views.__alloyId23.add($.__views.addGroupLabel);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId24"
    });
    __alloyId22.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.topRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "topRowContainer"
    });
    $.__views.__alloyId25.add($.__views.topRowContainer);
    $.__views.groupSettings = Ti.UI.createLabel({
        left: "1%",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Group Settings",
        id: "groupSettings"
    });
    $.__views.topRowContainer.add($.__views.groupSettings);
    $.__views.settingsImage = Ti.UI.createView({
        left: "5%",
        width: "30dp",
        height: "30dp",
        backgroundImage: "/Settings-icon.png",
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
    $.__views.__alloyId25.add($.__views.middleRowContainer);
    $.__views.groupImage = Ti.UI.createView({
        width: "60dp",
        height: "60dp",
        backgroundImage: "/groupImage.png",
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
    $.__views.__alloyId25.add($.__views.bottomRowContainer);
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
    $.__views.eventsImage = Ti.UI.createView({
        left: "5dp",
        width: "30dp",
        height: "30dp",
        backgroundImage: "/events.png",
        id: "eventsImage"
    });
    $.__views.bottomRowContainer.add($.__views.eventsImage);
    $.__views.notices = Ti.UI.createLabel({
        left: "95dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Notices",
        id: "notices"
    });
    $.__views.bottomRowContainer.add($.__views.notices);
    $.__views.noticesImage = Ti.UI.createView({
        left: "5dp",
        width: "30dp",
        height: "30dp",
        backgroundImage: "/notices.png",
        id: "noticesImage"
    });
    $.__views.bottomRowContainer.add($.__views.noticesImage);
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId22,
        id: "mainList"
    });
    $.__views.homepage.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;