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
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        id: "__alloyId2"
    });
    var __alloyId3 = [];
    __alloyId3.push($.__views.__alloyId2);
    $.__views.searchIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "5",
        backgroundImage: "/placeholder.png",
        id: "searchIcon"
    });
    $.__views.__alloyId2.add($.__views.searchIcon);
    $.__views.searchLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "40",
        text: "Search",
        id: "searchLabel"
    });
    $.__views.__alloyId2.add($.__views.searchLabel);
    $.__views.invitesIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "145",
        backgroundImage: "/placeholder.png",
        id: "invitesIcon"
    });
    $.__views.__alloyId2.add($.__views.invitesIcon);
    $.__views.invitesLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "180",
        text: "Invites",
        id: "invitesLabel"
    });
    $.__views.__alloyId2.add($.__views.invitesLabel);
    $.__views.addGroupIcon = Ti.UI.createView({
        width: "30dp",
        height: "30dp",
        left: "280",
        backgroundImage: "/placeholder.png",
        id: "addGroupIcon"
    });
    $.__views.__alloyId2.add($.__views.addGroupIcon);
    $.__views.addGroupLabel = Ti.UI.createLabel({
        width: "100dp",
        height: "100dp",
        left: "315",
        text: "Add Group",
        id: "addGroupLabel"
    });
    $.__views.__alloyId2.add($.__views.addGroupLabel);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: "100dp",
        height: "50dp",
        left: "5",
        text: "Group Settings",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: "100dp",
        height: "50dp",
        left: "115",
        text: "Admin Settings",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: "100dp",
        height: "50dp",
        left: "215",
        text: "Group Name",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: "100dp",
        height: "50dp",
        left: "315",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId1 = Ti.UI.createTableView({
        data: __alloyId3,
        id: "__alloyId1"
    });
    $.__views.homepage.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;