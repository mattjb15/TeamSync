function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupNotices";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.groupNotices = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "groupNotices"
    });
    $.__views.groupNotices && $.addTopLevelView($.__views.groupNotices);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.groupNotices.add($.__views.header);
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
        text: "Add Notice",
        id: "pageTitle",
        top: "10"
    });
    $.__views.groupNotices.add($.__views.pageTitle);
    $.__views.noticeName = Ti.UI.createTextField({
        id: "noticeName",
        top: "25",
        width: "75%",
        height: "30",
        hintText: "Notice Name"
    });
    $.__views.groupNotices.add($.__views.noticeName);
    $.__views.noticDescription = Ti.UI.createTextField({
        id: "noticDescription",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Notice Description"
    });
    $.__views.groupNotices.add($.__views.noticDescription);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "10",
        selectionIndicator: "true",
        useSpinner: "true",
        width: "75%",
        height: "120"
    });
    $.__views.groupNotices.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId28 = Ti.UI.createPickerRow({
        title: "role 1",
        id: "__alloyId28"
    });
    $.__views.column1.addRow($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createPickerRow({
        title: "role 2",
        id: "__alloyId29"
    });
    $.__views.column1.addRow($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createPickerRow({
        title: "role 3",
        id: "__alloyId30"
    });
    $.__views.column1.addRow($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createPickerRow({
        title: "role 4",
        id: "__alloyId31"
    });
    $.__views.column1.addRow($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createButton({
        title: "Add Notice",
        top: "10",
        width: "75%",
        id: "__alloyId32"
    });
    $.__views.groupNotices.add($.__views.__alloyId32);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.GroupNameLabel.text = args.groupName;
    $.GroupDescriptionLabel.text = args.groupDescription;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;