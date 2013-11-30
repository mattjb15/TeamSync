function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addeditgroup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addeditgroup = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addeditgroup"
    });
    $.__views.addeditgroup && $.addTopLevelView($.__views.addeditgroup);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "blue",
        id: "header"
    });
    $.__views.addeditgroup.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/placeholder.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.appTitle = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#fff",
        text: "TeamSync",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Add/Edit Group",
        id: "pageTitle",
        top: "10"
    });
    $.__views.addeditgroup.add($.__views.pageTitle);
    $.__views.GroupName = Ti.UI.createTextField({
        id: "GroupName",
        top: "25",
        width: "75%",
        height: "30",
        hintText: "Group Name"
    });
    $.__views.addeditgroup.add($.__views.GroupName);
    $.__views.GroupDescription = Ti.UI.createTextField({
        id: "GroupDescription",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Group Description"
    });
    $.__views.addeditgroup.add($.__views.GroupDescription);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Add Group",
        top: "10",
        width: "75%",
        id: "__alloyId0"
    });
    $.__views.addeditgroup.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;