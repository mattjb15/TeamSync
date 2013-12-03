function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addnotice";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addnotice = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addnotice"
    });
    $.__views.addnotice && $.addTopLevelView($.__views.addnotice);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        id: "header"
    });
    $.__views.addnotice.add($.__views.header);
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
    $.__views.addnotice.add($.__views.pageTitle);
    $.__views.noticeName = Ti.UI.createTextField({
        id: "noticeName",
        top: "25",
        width: "75%",
        height: "30",
        hintText: "Notice Name"
    });
    $.__views.addnotice.add($.__views.noticeName);
    $.__views.noticDescription = Ti.UI.createTextField({
        id: "noticDescription",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Notice Description"
    });
    $.__views.addnotice.add($.__views.noticDescription);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "10",
        selectionIndicator: "true",
        useSpinner: "true",
        width: "75%",
        height: "120"
    });
    $.__views.addnotice.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "role 1",
        id: "__alloyId8"
    });
    $.__views.column1.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        title: "role 2",
        id: "__alloyId9"
    });
    $.__views.column1.addRow($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerRow({
        title: "role 3",
        id: "__alloyId10"
    });
    $.__views.column1.addRow($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createPickerRow({
        title: "role 4",
        id: "__alloyId11"
    });
    $.__views.column1.addRow($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        title: "Add Notice",
        top: "10",
        width: "75%",
        id: "__alloyId12"
    });
    $.__views.addnotice.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;