function Controller() {
    function setRoles() {
        for (var i = 0; Alloy.Globals.getRoleResults.length > i; i++) {
            var row = Titanium.UI.createTableViewRow();
            row.id = "role" + i;
            row.title = Alloy.Globals.getRoleResults[i].roleName;
            $.sectionFruit.add(row);
        }
    }
    function addRole() {
        if ("" == $.addRole.value) alert("No role name given"); else {
            addRoleReq.open("POST", "http://sheffieldbears.com/teamsync/addRole.php");
            var params = {
                roleName: $.addRole.value,
                groupId: Alloy.Globals.group_id
            };
            addRoleReq.send(params);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "groupsettings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.groupSettingsWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "groupSettingsWin"
    });
    $.__views.groupSettingsWin && $.addTopLevelView($.__views.groupSettingsWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.groupSettingsWin.add($.__views.header);
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
    $.__views.groupSettingsWin.add($.__views.groupname);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Settings",
        id: "pageTitle",
        top: "10"
    });
    $.__views.groupSettingsWin.add($.__views.pageTitle);
    $.__views.addRole = Ti.UI.createTextField({
        id: "addRole",
        top: "10",
        width: "250",
        height: "30",
        hintText: "Add new role"
    });
    $.__views.groupSettingsWin.add($.__views.addRole);
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "Add",
        top: "10",
        id: "__alloyId20"
    });
    $.__views.groupSettingsWin.add($.__views.__alloyId20);
    addRole ? $.__views.__alloyId20.addEventListener("click", addRole) : __defers["$.__views.__alloyId20!click!addRole"] = true;
    var __alloyId21 = [];
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Roles"
    });
    __alloyId21.push($.__views.sectionFruit);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId21,
        id: "table"
    });
    $.__views.groupSettingsWin.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.groupname.text = "Test Bears";
    var getRolesReq = Titanium.Network.createHTTPClient();
    getRolesReq.onload = function() {
        var json = this.responseText;
        var response = JSON.parse(json);
        if ("no roles" != response) {
            Alloy.Globals.getRoleResults = response;
            setRoles();
        }
    };
    getRolesReq.open("POST", "http://sheffieldbears.com/teamsync/getGroupRoles.php");
    var params = {
        groupId: Alloy.Globals.group_id
    };
    getRolesReq.send(params);
    var addRoleReq = Titanium.Network.createHTTPClient();
    addRoleReq.onload = function() {
        if (this.responseText) {
            alert(this.responseText);
            $.groupSettingsWin.close();
            var win = Alloy.createController("homepage").getView();
            win.open();
        } else alert(this.responseText);
    };
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId20!click!addRole"] && $.__views.__alloyId20.addEventListener("click", addRole);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;