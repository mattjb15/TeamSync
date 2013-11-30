function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "blue",
        id: "header"
    });
    $.__views.signup.add($.__views.header);
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
        text: "Sign Up",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signup.add($.__views.pageTitle);
    $.__views.emailAddress = Ti.UI.createTextField({
        id: "emailAddress",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Email Address"
    });
    $.__views.signup.add($.__views.emailAddress);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Username"
    });
    $.__views.signup.add($.__views.username);
    $.__views.firstName = Ti.UI.createTextField({
        id: "firstName",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "First Name"
    });
    $.__views.signup.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        id: "lastName",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Last Name"
    });
    $.__views.signup.add($.__views.lastName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Password"
    });
    $.__views.signup.add($.__views.password);
    $.__views.confirmPassword = Ti.UI.createTextField({
        id: "confirmPassword",
        passwordMask: "true",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Confirm Password"
    });
    $.__views.signup.add($.__views.confirmPassword);
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Sign Up",
        top: "10",
        width: "75%",
        id: "__alloyId18"
    });
    $.__views.signup.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;