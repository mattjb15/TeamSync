function Controller() {
    function setdata() {
        Alloy.Globals.role_id = Alloy.Globals.getNoticeResults[0].roleId;
        Alloy.Globals.role_name = Alloy.Globals.getNoticeResults[0].roleName;
        var data = [];
        for (var i = 0; Alloy.Globals.getNoticeResults.length > i; i++) {
            data[i] = Alloy.createController("noticesRow", {
                noticeName: Alloy.Globals.getNoticeResults[i].noticeSubject,
                noticeDescription: Alloy.Globals.getNoticeResults[i].noticeBody,
                noticeDate: Alloy.Globals.getNoticeResults[i].noticeDate
            }).getView();
            $.noticeList.appendRow(data[i]);
        }
    }
    function loadGroupHomepage() {
        var win = Alloy.createController("groupHomepage").getView();
        win.open();
        $.noticesWin.close();
    }
    function loadAddNotice() {
        var win = Alloy.createController("addnotice").getView();
        win.open();
        $.noticesWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notices";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.noticesWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "noticesWin"
    });
    $.__views.noticesWin && $.addTopLevelView($.__views.noticesWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.noticesWin.add($.__views.header);
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
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Notices for group name",
        id: "pageTitle"
    });
    $.__views.header.add($.__views.pageTitle);
    loadGroupHomepage ? $.__views.pageTitle.addEventListener("click", loadGroupHomepage) : __defers["$.__views.pageTitle!click!loadGroupHomepage"] = true;
    $.__views.groupImage = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/groupImage.png",
        id: "groupImage"
    });
    $.__views.header.add($.__views.groupImage);
    $.__views.__alloyId30 = Ti.UI.createButton({
        title: "Add New Notice",
        top: "10",
        width: "75%",
        id: "__alloyId30"
    });
    $.__views.noticesWin.add($.__views.__alloyId30);
    loadAddNotice ? $.__views.__alloyId30.addEventListener("click", loadAddNotice) : __defers["$.__views.__alloyId30!click!loadAddNotice"] = true;
    $.__views.noticeList = Ti.UI.createTableView({
        top: "10",
        id: "noticeList"
    });
    $.__views.noticesWin.add($.__views.noticeList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pageTitle.text = Alloy.Globals.group_name;
    var getNoticesReq = Titanium.Network.createHTTPClient();
    getNoticesReq.onload = function() {
        var json = this.responseText;
        var response = JSON.parse(json);
        if ("no notices" != response) {
            Alloy.Globals.getNoticeResults = response;
            setdata();
        } else {
            var row = Titanium.UI.createTableViewRow();
            var view = Titanium.UI.createView({
                backgroundColor: "red",
                height: 50
            });
            row.height = "auto";
            var label = Ti.UI.createLabel({
                text: "There are no notices."
            });
            view.add(label);
            row.add(view);
            $.noticeList.appendRow(row);
        }
    };
    getNoticesReq.open("POST", "http://sheffieldbears.com/teamsync/getNotices.php");
    var params = {
        userId: Alloy.Globals.user_id,
        groupId: Alloy.Globals.group_id
    };
    getNoticesReq.send(params);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.pageTitle!click!loadGroupHomepage"] && $.__views.pageTitle.addEventListener("click", loadGroupHomepage);
    __defers["$.__views.__alloyId30!click!loadAddNotice"] && $.__views.__alloyId30.addEventListener("click", loadAddNotice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;