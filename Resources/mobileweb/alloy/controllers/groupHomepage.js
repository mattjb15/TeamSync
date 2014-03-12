function Controller() {
    function loadGroupEvents() {
        var win = Alloy.createController("events").getView();
        win.open();
        Alloy.Globals.closeGroupHomepage();
    }
    function loadGroupNotices() {
        var win = Alloy.createController("notices").getView();
        win.open();
        Alloy.Globals.closeGroupHomepage();
    }
    function loadMemberlist() {
        var win = Alloy.createController("memberlist").getView();
        win.open();
        Alloy.Globals.closeGroupHomepage();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupHomepage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.groupHomepageWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "groupHomepageWin"
    });
    $.__views.groupHomepageWin && $.addTopLevelView($.__views.groupHomepageWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.groupHomepageWin.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "TeamSync",
        id: "pageTitle"
    });
    $.__views.header.add($.__views.pageTitle);
    $.__views.avatar = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/man-silhouette.png",
        id: "avatar"
    });
    $.__views.header.add($.__views.avatar);
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: Ti.UI.FILL,
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.FILL,
        width: 225,
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.groupName = Ti.UI.createLabel({
        top: "15",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "Group Name",
        id: "groupName"
    });
    $.__views.__alloyId13.add($.__views.groupName);
    $.__views.groupDescription = Ti.UI.createLabel({
        top: "15",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Group Description",
        id: "groupDescription"
    });
    $.__views.__alloyId13.add($.__views.groupDescription);
    $.__views.view1 = Ti.UI.createView({
        top: "25",
        left: "0",
        id: "view1",
        backgroundColor: "red",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view1);
    loadGroupNotices ? $.__views.view1.addEventListener("click", loadGroupNotices) : __defers["$.__views.view1!click!loadGroupNotices"] = true;
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Notices",
        id: "__alloyId14"
    });
    $.__views.view1.add($.__views.__alloyId14);
    $.__views.view2 = Ti.UI.createView({
        top: "-100",
        right: "0",
        id: "view2",
        backgroundColor: "green",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view2);
    loadGroupEvents ? $.__views.view2.addEventListener("click", loadGroupEvents) : __defers["$.__views.view2!click!loadGroupEvents"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "Events",
        id: "__alloyId15"
    });
    $.__views.view2.add($.__views.__alloyId15);
    $.__views.view3 = Ti.UI.createView({
        top: "25",
        left: "0",
        id: "view3",
        backgroundColor: "blue",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view3);
    loadMemberlist ? $.__views.view3.addEventListener("click", loadMemberlist) : __defers["$.__views.view3!click!loadMemberlist"] = true;
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Members",
        id: "__alloyId16"
    });
    $.__views.view3.add($.__views.__alloyId16);
    $.__views.view4 = Ti.UI.createView({
        top: "-100",
        right: "0",
        id: "view4",
        backgroundColor: "yellow",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view4);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Settings",
        id: "__alloyId17"
    });
    $.__views.view4.add($.__views.__alloyId17);
    $.__views.view5 = Ti.UI.createView({
        top: "25",
        left: "0",
        id: "view5",
        backgroundColor: "red",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view5);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "Admin",
        id: "__alloyId18"
    });
    $.__views.view5.add($.__views.__alloyId18);
    $.__views.view6 = Ti.UI.createView({
        top: "-100",
        right: "0",
        id: "view6",
        backgroundColor: "green",
        width: "100",
        height: "100"
    });
    $.__views.__alloyId13.add($.__views.view6);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Other",
        id: "__alloyId19"
    });
    $.__views.view6.add($.__views.__alloyId19);
    $.__views.groupMain = Ti.UI.createTableView({
        data: __alloyId11,
        id: "groupMain",
        height: Ti.UI.FILL
    });
    $.__views.groupHomepageWin.add($.__views.groupMain);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Alloy.Globals.group_name) {
        $.groupName.text = "Group Picture";
        $.pageTitle.text = Alloy.Globals.group_name;
    }
    Alloy.Globals.group_description && ($.groupDescription.text = Alloy.Globals.group_description);
    __defers["$.__views.view1!click!loadGroupNotices"] && $.__views.view1.addEventListener("click", loadGroupNotices);
    __defers["$.__views.view2!click!loadGroupEvents"] && $.__views.view2.addEventListener("click", loadGroupEvents);
    __defers["$.__views.view3!click!loadMemberlist"] && $.__views.view3.addEventListener("click", loadMemberlist);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;