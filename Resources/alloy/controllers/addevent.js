function Controller() {
    function addEvent() {
        "" == $.eventName.value && ($.eventName.value = "Untitled Event");
        if ($.eventName.value && "" != $.eventDescription.value) {
            addEventReq.open("POST", "http://sheffieldbears.com/teamsync/addEvent.php");
            var params = {
                roleName: $.picker.getSelectedRow(0).title,
                eventName: $.eventName.value,
                eventDescription: $.eventDescription.value,
                eventDate: $.eventDate.value,
                groupId: Alloy.Globals.group_id
            };
            addEventReq.send(params);
        } else alert("Event Incomplete!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addevent";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addEventWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addEventWin"
    });
    $.__views.addEventWin && $.addTopLevelView($.__views.addEventWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.addEventWin.add($.__views.header);
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
        text: "Add Event",
        id: "pageTitle",
        top: "10"
    });
    $.__views.addEventWin.add($.__views.pageTitle);
    $.__views.eventName = Ti.UI.createTextField({
        id: "eventName",
        top: "25",
        width: "75%",
        height: "60",
        hintText: "Event Name"
    });
    $.__views.addEventWin.add($.__views.eventName);
    $.__views.eventDescription = Ti.UI.createTextField({
        id: "eventDescription",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Event Description"
    });
    $.__views.addEventWin.add($.__views.eventDescription);
    $.__views.eventDate = Ti.UI.createTextField({
        id: "eventDate",
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Event Date"
    });
    $.__views.addEventWin.add($.__views.eventDate);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "10",
        selectionIndicator: "true",
        useSpinner: "true",
        width: "75%",
        height: "180"
    });
    $.__views.addEventWin.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Add Event",
        top: "10",
        width: "75%",
        id: "__alloyId2"
    });
    $.__views.addEventWin.add($.__views.__alloyId2);
    addEvent ? $.__views.__alloyId2.addEventListener("click", addEvent) : __defers["$.__views.__alloyId2!click!addEvent"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var row = Ti.UI.createPickerRow();
    row.title = Alloy.Globals.role_name;
    $.column1.addRow(row);
    var addEventReq = Titanium.Network.createHTTPClient();
    addEventReq.onload = function() {
        if (this.responseText) {
            alert(this.responseText);
            $.addEventWin.close();
            var win = Alloy.createController("homepage").getView();
            win.open();
        } else alert(this.responseText);
    };
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId2!click!addEvent"] && $.__views.__alloyId2.addEventListener("click", addEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;