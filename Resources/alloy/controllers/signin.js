function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.signin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signin"
    });
    $.__views.signin && $.addTopLevelView($.__views.signin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "blue",
        id: "header"
    });
    $.__views.signin.add($.__views.header);
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
        text: "Sign In",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signin.add($.__views.pageTitle);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        top: "100",
        width: "250",
        height: "30",
        hintText: "Username"
    });
    $.__views.signin.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Password"
    });
    $.__views.signin.add($.__views.password);
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Sign In",
        top: "10",
        id: "__alloyId9"
    });
    $.__views.signin.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Sign Up",
        top: "10",
        id: "__alloyId10"
    });
    $.__views.signin.add($.__views.__alloyId10);
    $.__views.resetPassword = Ti.UI.createLabel({
        text: "Reset password...",
        id: "resetPassword",
        top: "10"
    });
    $.__views.signin.add($.__views.resetPassword);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;