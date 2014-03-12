function Controller() {
    function inviteUser() {
        var url = "http://192.168.0.21/teamsync/inviteuser.php?user_id=" + userID + "&group_id=" + groupID;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                loadMemberSearch();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    function loadMemberSearch() {
        var win = Alloy.createController("homepage").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "membersearchRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.membersearchRow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "membersearchRow"
    });
    $.__views.membersearchRow && $.addTopLevelView($.__views.membersearchRow);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId28"
    });
    $.__views.membersearchRow.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "black",
        text: "row",
        id: "name"
    });
    $.__views.__alloyId29.add($.__views.name);
    $.__views.invite = Ti.UI.createButton({
        right: "10dp",
        title: "Invite",
        id: "invite"
    });
    $.__views.__alloyId29.add($.__views.invite);
    inviteUser ? $.__views.invite.addEventListener("click", inviteUser) : __defers["$.__views.invite!click!inviteUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var txt = "";
    txt = args.names.username;
    var userID = args.names.id;
    var groupID = 23;
    $.name.text = txt;
    __defers["$.__views.invite!click!inviteUser"] && $.__views.invite.addEventListener("click", inviteUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;