function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupEvents";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.groupEvents = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "groupEvents"
    });
    $.__views.groupEvents && $.addTopLevelView($.__views.groupEvents);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.groupEvents.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.appTitle = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "black",
        text: "TeamSync",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Add Event",
        id: "pageTitle",
        top: "10"
    });
    $.__views.groupEvents.add($.__views.pageTitle);
    $.__views.eventName = Ti.UI.createTextField({
        id: "eventName",
        top: "25",
        width: "75%",
        height: "30",
        hintText: "Event Name"
    });
    $.__views.groupEvents.add($.__views.eventName);
    $.__views.eventDescription = Ti.UI.createTextField({
        id: "eventDescription",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Event Description"
    });
    $.__views.groupEvents.add($.__views.eventDescription);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "10",
        selectionIndicator: "true",
        useSpinner: "true",
        width: "75%",
        height: "120"
    });
    $.__views.groupEvents.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId22 = Ti.UI.createPickerRow({
        title: "role 1",
        id: "__alloyId22"
    });
    $.__views.column1.addRow($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createPickerRow({
        title: "role 2",
        id: "__alloyId23"
    });
    $.__views.column1.addRow($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createPickerRow({
        title: "role 3",
        id: "__alloyId24"
    });
    $.__views.column1.addRow($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createPickerRow({
        title: "role 4",
        id: "__alloyId25"
    });
    $.__views.column1.addRow($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createButton({
        title: "Add Event",
        top: "10",
        width: "75%",
        id: "__alloyId26"
    });
    $.__views.groupEvents.add($.__views.__alloyId26);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.GroupNameLabel.text = args.groupName;
    $.GroupDescriptionLabel.text = args.groupDescription;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;