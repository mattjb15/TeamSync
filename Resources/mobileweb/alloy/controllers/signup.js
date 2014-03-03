function Controller() {
    function clickSignup() {
        if ("" != $.username.value && "" != $.password.value && "" != $.confirmPassword.value && "" != $.firstName.value && "" != $.lastName.value && "" != $.emailAddress.value) if ($.password.value != $.confirmPassword.value) alert("Your passwords do not match"); else if (checkemail($.emailAddress.value)) {
            createReq.open("POST", "http://sheffieldbears.com/teamsync/signup.php");
            var params = {
                username: $.username.value,
                password: Ti.Utils.md5HexDigest($.password.value),
                firstName: $.firstName.value,
                lastName: $.lastName.value,
                emailAddress: $.emailAddress.value
            };
            createReq.send(params);
        } else alert("Please enter a valid email"); else alert("All fields are required");
    }
    function checkemail(emailAddress) {
        var str = emailAddress;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        testresults = filter.test(str) ? true : false;
        return testresults;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
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
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Sign Up",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signupWin.add($.__views.pageTitle);
    $.__views.emailAddress = Ti.UI.createTextField({
        id: "emailAddress",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Email Address"
    });
    $.__views.signupWin.add($.__views.emailAddress);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Username"
    });
    $.__views.signupWin.add($.__views.username);
    $.__views.firstName = Ti.UI.createTextField({
        id: "firstName",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "First Name"
    });
    $.__views.signupWin.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        id: "lastName",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Last Name"
    });
    $.__views.signupWin.add($.__views.lastName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Password"
    });
    $.__views.signupWin.add($.__views.password);
    $.__views.confirmPassword = Ti.UI.createTextField({
        id: "confirmPassword",
        passwordMask: "true",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Confirm Password"
    });
    $.__views.signupWin.add($.__views.confirmPassword);
    $.__views.__alloyId25 = Ti.UI.createButton({
        title: "Sign Up",
        top: "10",
        width: "75%",
        id: "__alloyId25"
    });
    $.__views.signupWin.add($.__views.__alloyId25);
    clickSignup ? $.__views.__alloyId25.addEventListener("click", clickSignup) : __defers["$.__views.__alloyId25!click!clickSignup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var createReq = Titanium.Network.createHTTPClient();
    createReq.onload = function() {
        if ("Registration failed." == this.responseText || "That username or email already exists" == this.responseText) alert(this.responseText); else {
            var alertDialog = Titanium.UI.createAlertDialog({
                title: "Alert",
                message: this.responseText,
                buttonNames: [ "OK" ]
            });
            alertDialog.addEventListener("click", function() {
                var win = Alloy.createController("signin").getView();
                win.open();
                $.signupWin.close();
            });
            alertDialog.show();
        }
    };
    var testresults;
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId25!click!clickSignup"] && $.__views.__alloyId25.addEventListener("click", clickSignup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;