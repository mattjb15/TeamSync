function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupsettings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signupWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signupWin"
    });
    $.__views.signupWin && $.addTopLevelView($.__views.signupWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.signupWin.add($.__views.header);
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
    $.__views.groupname = Ti.UI.createLabel({
        text: "James' Friends",
        id: "groupname",
        top: "10"
    });
    $.__views.signupWin.add($.__views.groupname);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Settings",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signupWin.add($.__views.pageTitle);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.signupWin.add($.__views.__alloyId11);
    var __alloyId12 = [];
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Roles"
    });
    __alloyId12.push($.__views.sectionFruit);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        title: "role 1",
        id: "__alloyId13"
    });
    $.__views.sectionFruit.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        title: "role 2",
        id: "__alloyId14"
    });
    $.__views.sectionFruit.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        title: "role 3",
        id: "__alloyId15"
    });
    $.__views.sectionFruit.add($.__views.__alloyId15);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId12,
        id: "table"
    });
    $.__views.__alloyId11.add($.__views.table);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId16"
    });
    $.__views.signupWin.add($.__views.__alloyId16);
    $.__views.addRole = Ti.UI.createTextField({
        id: "addRole",
        top: "10",
        width: "70%",
        hintText: "Add new role"
    });
    $.__views.__alloyId16.add($.__views.addRole);
    $.__views.__alloyId17 = Ti.UI.createButton({
        title: "Add",
        top: "10",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;