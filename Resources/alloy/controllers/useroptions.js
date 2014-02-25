function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "useroptions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.useroptions = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "useroptions"
    });
    $.__views.useroptions && $.addTopLevelView($.__views.useroptions);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.useroptions.add($.__views.header);
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
    $.__views.firstName = Ti.UI.createTextField({
        id: "firstName",
        top: "10",
        width: "250",
        height: "30",
        hintText: "First Name"
    });
    $.__views.useroptions.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        id: "lastName",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Last Name"
    });
    $.__views.useroptions.add($.__views.lastName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "New Password"
    });
    $.__views.useroptions.add($.__views.password);
    $.__views.confirmPassword = Ti.UI.createTextField({
        id: "confirmPassword",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Confirm Password"
    });
    $.__views.useroptions.add($.__views.confirmPassword);
    $.__views.CurrentPassword = Ti.UI.createTextField({
        id: "CurrentPassword",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Current Password"
    });
    $.__views.useroptions.add($.__views.CurrentPassword);
    $.__views.__alloyId27 = Ti.UI.createButton({
        title: "Update",
        top: "10",
        id: "__alloyId27"
    });
    $.__views.useroptions.add($.__views.__alloyId27);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;