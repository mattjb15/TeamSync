function Controller() {
    function loadMemberSearch() {
        var win = Alloy.createController("membersearch").getView();
        win.open();
        $.membersearchWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "memberlist";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.membersearchWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "membersearchWin"
    });
    $.__views.membersearchWin && $.addTopLevelView($.__views.membersearchWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.membersearchWin.add($.__views.header);
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
        text: "Member List",
        id: "pageTitle",
        top: "10"
    });
    $.__views.membersearchWin.add($.__views.pageTitle);
    $.__views.__alloyId22 = Ti.UI.createButton({
        title: "Invite User",
        top: "10",
        width: "75%",
        id: "__alloyId22"
    });
    $.__views.membersearchWin.add($.__views.__alloyId22);
    loadMemberSearch ? $.__views.__alloyId22.addEventListener("click", loadMemberSearch) : __defers["$.__views.__alloyId22!click!loadMemberSearch"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId22!click!loadMemberSearch"] && $.__views.__alloyId22.addEventListener("click", loadMemberSearch);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;