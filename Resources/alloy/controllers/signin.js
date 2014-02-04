function Controller() {
    function loadSignup() {
        var win = Alloy.createController("signup").getView();
        win.open();
        $.signinWin.close();
    }
    function login() {
        if ("" != $.username.value && "" != $.password.value) {
            loginReq.open("POST", "http://sheffieldbears.com/teamsync/login.php");
            var params = {
                username: $.username.value,
                password: Ti.Utils.md5HexDigest($.password.value)
            };
            loginReq.send(params);
        } else alert("Username/Password are required");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signinWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signinWin"
    });
    $.__views.signinWin && $.addTopLevelView($.__views.signinWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.signinWin.add($.__views.header);
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
        text: "Sign In",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signinWin.add($.__views.pageTitle);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        top: "25",
        width: "75%",
        height: "60",
        hintText: "Username"
    });
    $.__views.signinWin.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Password"
    });
    $.__views.signinWin.add($.__views.password);
    $.__views.__alloyId31 = Ti.UI.createButton({
        title: "Sign In",
        top: "10",
        width: "75%",
        id: "__alloyId31"
    });
    $.__views.signinWin.add($.__views.__alloyId31);
    login ? $.__views.__alloyId31.addEventListener("click", login) : __defers["$.__views.__alloyId31!click!login"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        title: "Sign Up",
        top: "10",
        width: "75%",
        id: "__alloyId32"
    });
    $.__views.signinWin.add($.__views.__alloyId32);
    loadSignup ? $.__views.__alloyId32.addEventListener("click", loadSignup) : __defers["$.__views.__alloyId32!click!loadSignup"] = true;
    $.__views.resetPassword = Ti.UI.createLabel({
        text: "Reset password...",
        id: "resetPassword",
        top: "10"
    });
    $.__views.signinWin.add($.__views.resetPassword);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var loginReq = Titanium.Network.createHTTPClient();
    loginReq.onload = function() {
        var json = this.responseText;
        var response = JSON.parse(json);
        if (true == response.logged) {
            Alloy.Globals.username = response.username;
            Alloy.Globals.user_id = response.id;
            var win = Alloy.createController("homepage").getView();
            win.open();
            $.signinWin.close();
        } else alert(response.message);
    };
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId31!click!login"] && $.__views.__alloyId31.addEventListener("click", login);
    __defers["$.__views.__alloyId32!click!loadSignup"] && $.__views.__alloyId32.addEventListener("click", loadSignup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;