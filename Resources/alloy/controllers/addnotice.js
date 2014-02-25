function Controller() {
    function addNotice() {
        "" == $.noticeName.value && ($.noticeName.value = "Untitled");
        if ($.noticeName.value && "" != $.noticeDescription.value) {
            var date = new Date();
            var stringDate = date.toString();
            var cleansedDate = stringDate.split("GMT");
            addNoticeReq.open("POST", "http://sheffieldbears.com/teamsync/addNotice.php");
            var params = {
                roleName: $.picker.getSelectedRow(0).title,
                noticeName: $.noticeName.value,
                noticeDescription: $.noticeDescription.value,
                noticeDate: cleansedDate[0],
                groupId: Alloy.Globals.group_id
            };
            addNoticeReq.send(params);
        } else alert("Notice Incomplete!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addnotice";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addNoticeWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addNoticeWin"
    });
    $.__views.addNoticeWin && $.addTopLevelView($.__views.addNoticeWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.addNoticeWin.add($.__views.header);
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
        text: "Add Notice",
        id: "pageTitle",
        top: "10"
    });
    $.__views.addNoticeWin.add($.__views.pageTitle);
    $.__views.noticeName = Ti.UI.createTextField({
        id: "noticeName",
        top: "25",
        width: "75%",
        height: "60",
        hintText: "Notice Name"
    });
    $.__views.addNoticeWin.add($.__views.noticeName);
    $.__views.noticeDescription = Ti.UI.createTextField({
        id: "noticeDescription",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Notice Description"
    });
    $.__views.addNoticeWin.add($.__views.noticeDescription);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "10",
        selectionIndicator: "true",
        useSpinner: "true",
        width: "75%",
        height: "180"
    });
    $.__views.addNoticeWin.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Add Notice",
        top: "10",
        width: "75%",
        id: "__alloyId4"
    });
    $.__views.addNoticeWin.add($.__views.__alloyId4);
    addNotice ? $.__views.__alloyId4.addEventListener("click", addNotice) : __defers["$.__views.__alloyId4!click!addNotice"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var row = Ti.UI.createPickerRow();
    row.title = Alloy.Globals.role_name;
    $.column1.addRow(row);
    var addNoticeReq = Titanium.Network.createHTTPClient();
    addNoticeReq.onload = function() {
        if (this.responseText) {
            alert(this.responseText);
            $.addNoticeWin.close();
            var win = Alloy.createController("homepage").getView();
            win.open();
        } else alert(this.responseText);
    };
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId4!click!addNotice"] && $.__views.__alloyId4.addEventListener("click", addNotice);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;