function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notices";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.notices = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "notices"
    });
    $.__views.notices && $.addTopLevelView($.__views.notices);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.notices.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.groupName = Ti.UI.createLabel({
        text: "Notices for group name",
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
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        id: "__alloyId27"
    });
    var __alloyId28 = [];
    __alloyId28.push($.__views.__alloyId27);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.noticeName = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "notice name",
        id: "noticeName"
    });
    $.__views.__alloyId29.add($.__views.noticeName);
    $.__views.noticeDescription = Ti.UI.createLabel({
        text: "The notice text goes here!!!!",
        id: "noticeDescription"
    });
    $.__views.__alloyId29.add($.__views.noticeDescription);
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId28,
        id: "mainList"
    });
    $.__views.notices.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;