function Controller() {
    function addGroup() {
        "" == $.GroupDescription.value && ($.GroupDescription.value = "No Description");
        if ("" != $.GroupName.value) {
            addGroupReq.open("POST", "http://sheffieldbears.com/teamsync/addGroup.php");
            var params = {
                userId: Alloy.Globals.user_id,
                groupName: $.GroupName.value,
                groupDescription: $.GroupDescription.value
            };
            addGroupReq.send(params);
        } else alert("Group Name Required!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addeditgroup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addGroupWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addGroupWin"
    });
    $.__views.addGroupWin && $.addTopLevelView($.__views.addGroupWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.addGroupWin.add($.__views.header);
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
        text: "Add/Edit Group",
        id: "pageTitle",
        top: "10"
    });
    $.__views.addGroupWin.add($.__views.pageTitle);
    $.__views.GroupName = Ti.UI.createTextField({
        id: "GroupName",
        top: "25",
        width: "75%",
        height: "30",
        hintText: "Group Name"
    });
    $.__views.addGroupWin.add($.__views.GroupName);
    $.__views.GroupDescription = Ti.UI.createTextField({
        id: "GroupDescription",
        top: "10",
        width: "75%",
        height: "30",
        hintText: "Group Description"
    });
    $.__views.addGroupWin.add($.__views.GroupDescription);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Add Group",
        top: "10",
        width: "75%",
        id: "__alloyId0"
    });
    $.__views.addGroupWin.add($.__views.__alloyId0);
    addGroup ? $.__views.__alloyId0.addEventListener("click", addGroup) : __defers["$.__views.__alloyId0!click!addGroup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var addGroupReq = Titanium.Network.createHTTPClient();
    addGroupReq.onload = function() {
        if (this.responseText) {
            var alertDialog = Titanium.UI.createAlertDialog({
                title: "Alert",
                message: this.responseText,
                buttonNames: [ "OK" ]
            });
            alertDialog.addEventListener("click", function() {
                $.addGroupWin.close();
                var win = Alloy.createController("homepage").getView();
                win.open();
            });
            alertDialog.show();
        } else alert(this.responseText);
    };
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId0!click!addGroup"] && $.__views.__alloyId0.addEventListener("click", addGroup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;