function Controller() {
    function loadGroupEvents() {
        Alloy.Globals.group_id = args.groupId;
        var win = Alloy.createController("events").getView();
        win.open();
        Alloy.Globals.closeHomepage();
    }
    function loadGroupNotices() {
        Alloy.Globals.group_id = args.groupId;
        var win = Alloy.createController("notices").getView();
        win.open();
        Alloy.Globals.closeHomepage();
    }
    function loadGroupSettings() {
        Alloy.Globals.group_id = args.groupId;
        var win = Alloy.createController("groupsettings").getView();
        win.open();
        Alloy.Globals.closeHomepage();
    }
    function loadGroupHomepage() {
        Alloy.Globals.group_id = args.groupId;
        Alloy.Globals.group_name = args.groupName;
        Alloy.Globals.group_description = args.groupDescription;
        var win = Alloy.createController("groupHomepage").getView();
        win.open();
        Alloy.Globals.closeHomepage();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homepageRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homepageRow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "homepageRow"
    });
    $.__views.homepageRow && $.addTopLevelView($.__views.homepageRow);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.homepageRow.add($.__views.__alloyId25);
    $.__views.topRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "topRowContainer"
    });
    $.__views.__alloyId25.add($.__views.topRowContainer);
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
    loadGroupSettings ? $.__views.groupSettings.addEventListener("click", loadGroupSettings) : __defers["$.__views.groupSettings!click!loadGroupSettings"] = true;
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
    loadGroupHomepage ? $.__views.groupImage.addEventListener("click", loadGroupHomepage) : __defers["$.__views.groupImage!click!loadGroupHomepage"] = true;
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
    loadGroupEvents ? $.__views.events.addEventListener("click", loadGroupEvents) : __defers["$.__views.events!click!loadGroupEvents"] = true;
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
    loadGroupNotices ? $.__views.notices.addEventListener("click", loadGroupNotices) : __defers["$.__views.notices!click!loadGroupNotices"] = true;
    $.__views.noticesImage = Ti.UI.createView({
        left: "5dp",
        width: "30dp",
        height: "30dp",
        backgroundImage: "/notices.png",
        id: "noticesImage"
    });
    $.__views.bottomRowContainer.add($.__views.noticesImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.GroupNameLabel.text = args.groupName;
    $.GroupDescriptionLabel.text = args.groupDescription;
    __defers["$.__views.groupSettings!click!loadGroupSettings"] && $.__views.groupSettings.addEventListener("click", loadGroupSettings);
    __defers["$.__views.groupImage!click!loadGroupHomepage"] && $.__views.groupImage.addEventListener("click", loadGroupHomepage);
    __defers["$.__views.events!click!loadGroupEvents"] && $.__views.events.addEventListener("click", loadGroupEvents);
    __defers["$.__views.notices!click!loadGroupNotices"] && $.__views.notices.addEventListener("click", loadGroupNotices);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;