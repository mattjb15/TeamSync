function Controller() {
    function loadGroupEvents() {
        var win = Alloy.createController("groupEvents").getView();
        win.open();
        $.homepageWin.close();
    }
    function loadGroupNotices() {
        var win = Alloy.createController("groupNotices").getView();
        win.open();
        $.homepageWin.close();
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
    $.__views.__alloyId36 = Ti.UI.createView({
        id: "__alloyId36"
    });
    $.__views.homepageRow.add($.__views.__alloyId36);
    $.__views.topRowContainer = Ti.UI.createView({
        id: "topRowContainer"
    });
    $.__views.__alloyId36.add($.__views.topRowContainer);
    $.__views.groupSettings = Ti.UI.createLabel({
        text: "Group Settings",
        id: "groupSettings"
    });
    $.__views.topRowContainer.add($.__views.groupSettings);
    $.__views.settingsImage = Ti.UI.createView({
        id: "settingsImage"
    });
    $.__views.topRowContainer.add($.__views.settingsImage);
    $.__views.joinRequests = Ti.UI.createLabel({
        text: "Join Requests",
        id: "joinRequests"
    });
    $.__views.topRowContainer.add($.__views.joinRequests);
    $.__views.numberOfJoinRequests = Ti.UI.createLabel({
        text: "1",
        id: "numberOfJoinRequests"
    });
    $.__views.topRowContainer.add($.__views.numberOfJoinRequests);
    $.__views.middleRowContainer = Ti.UI.createView({
        id: "middleRowContainer"
    });
    $.__views.__alloyId36.add($.__views.middleRowContainer);
    $.__views.groupImage = Ti.UI.createView({
        id: "groupImage"
    });
    $.__views.middleRowContainer.add($.__views.groupImage);
    $.__views.innerMiddleContainer = Ti.UI.createView({
        id: "innerMiddleContainer"
    });
    $.__views.middleRowContainer.add($.__views.innerMiddleContainer);
    $.__views.GroupNameLabel = Ti.UI.createLabel({
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
        id: "bottomRowContainer"
    });
    $.__views.__alloyId36.add($.__views.bottomRowContainer);
    $.__views.events = Ti.UI.createLabel({
        text: "Events",
        id: "events"
    });
    $.__views.bottomRowContainer.add($.__views.events);
    loadGroupEvents ? $.__views.events.addEventListener("click", loadGroupEvents) : __defers["$.__views.events!click!loadGroupEvents"] = true;
    $.__views.notices = Ti.UI.createLabel({
        text: "Notices",
        id: "notices"
    });
    $.__views.bottomRowContainer.add($.__views.notices);
    loadGroupNotices ? $.__views.notices.addEventListener("click", loadGroupNotices) : __defers["$.__views.notices!click!loadGroupNotices"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.GroupNameLabel.text = args.groupName;
    $.GroupDescriptionLabel.text = args.groupDescription;
    __defers["$.__views.events!click!loadGroupEvents"] && $.__views.events.addEventListener("click", loadGroupEvents);
    __defers["$.__views.notices!click!loadGroupNotices"] && $.__views.notices.addEventListener("click", loadGroupNotices);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;