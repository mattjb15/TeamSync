function Controller() {
    function loadAddNotice() {
        var win = Alloy.createController("addnotice").getView();
        win.open();
        $.noticesWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notices";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.noticesWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "noticesWin"
    });
    $.__views.noticesWin && $.addTopLevelView($.__views.noticesWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.noticesWin.add($.__views.header);
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
    $.__views.__alloyId27 = Ti.UI.createButton({
        title: "Add New Notice",
        top: "10",
        width: "75%",
        id: "__alloyId27"
    });
    $.__views.noticesWin.add($.__views.__alloyId27);
    loadAddNotice ? $.__views.__alloyId27.addEventListener("click", loadAddNotice) : __defers["$.__views.__alloyId27!click!loadAddNotice"] = true;
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        id: "__alloyId28"
    });
    var __alloyId29 = [];
    __alloyId29.push($.__views.__alloyId28);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.noticeName = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "notice name",
        id: "noticeName"
    });
    $.__views.__alloyId30.add($.__views.noticeName);
    $.__views.noticeDescription = Ti.UI.createLabel({
        text: "The notice text goes here!!!!",
        id: "noticeDescription"
    });
    $.__views.__alloyId30.add($.__views.noticeDescription);
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId29,
        top: "10",
        id: "mainList"
    });
    $.__views.noticesWin.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId27!click!loadAddNotice"] && $.__views.__alloyId27.addEventListener("click", loadAddNotice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;