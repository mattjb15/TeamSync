function Controller() {
    function updateOptions() {
        var currentPassHash = Ti.Utils.md5HexDigest($.currentPassword.value);
        if (currentPassHash != Alloy.Globals.pass) alert("Incorrect Password!"); else {
            Alloy.Globals.pass = "";
            if ("" != $.password.value) var newPassHash = Ti.Utils.md5HexDigest($.password.value); else var newPassHash = "";
            if ($.password.value == $.confirmPassword.value) {
                updateOptionsReq.open("POST", "http://sheffieldbears.com/teamsync/updateOptions.php");
                var params = {
                    userId: Alloy.Globals.user_id,
                    firstName: $.firstName.value,
                    lastName: $.lastName.value,
                    password: newPassHash
                };
                updateOptionsReq.send(params);
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "useroptions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.useroptionsWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "useroptionsWin"
    });
    $.__views.useroptionsWin && $.addTopLevelView($.__views.useroptionsWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.useroptionsWin.add($.__views.header);
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
    $.__views.avatar = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/man-silhouette.png",
        id: "avatar"
    });
    $.__views.header.add($.__views.avatar);
    $.__views.firstName = Ti.UI.createTextField({
        id: "firstName",
        top: "10",
        width: "250",
        height: "30",
        hintText: "First Name"
    });
    $.__views.useroptionsWin.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        id: "lastName",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Last Name"
    });
    $.__views.useroptionsWin.add($.__views.lastName);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "New Password"
    });
    $.__views.useroptionsWin.add($.__views.password);
    $.__views.confirmPassword = Ti.UI.createTextField({
        id: "confirmPassword",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Confirm Password"
    });
    $.__views.useroptionsWin.add($.__views.confirmPassword);
    $.__views.currentPassword = Ti.UI.createTextField({
        id: "currentPassword",
        passwordMask: "true",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Current Password"
    });
    $.__views.useroptionsWin.add($.__views.currentPassword);
    $.__views.__alloyId26 = Ti.UI.createButton({
        title: "Update",
        top: "10",
        id: "__alloyId26"
    });
    $.__views.useroptionsWin.add($.__views.__alloyId26);
    updateOptions ? $.__views.__alloyId26.addEventListener("click", updateOptions) : __defers["$.__views.__alloyId26!click!updateOptions"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var getPassReq = Titanium.Network.createHTTPClient();
    getPassReq.onload = function() {
        this.responseText ? Alloy.Globals.pass = this.responseText.trim() : alert("ERROR");
    };
    getPassReq.open("POST", "http://sheffieldbears.com/teamsync/getPass.php");
    var params = {
        userId: Alloy.Globals.user_id
    };
    getPassReq.send(params);
    var updateOptionsReq = Titanium.Network.createHTTPClient();
    updateOptionsReq.onload = function() {
        if (this.responseText) {
            alert(this.responseText);
            $.useroptionsWin.close();
            var win = Alloy.createController("homepage").getView();
            win.open();
        } else alert(this.responseText);
    };
    __defers["$.__views.__alloyId26!click!updateOptions"] && $.__views.__alloyId26.addEventListener("click", updateOptions);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;