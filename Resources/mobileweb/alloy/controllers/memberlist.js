function Controller() {
    function createRow(Sku, Name, Qty) {
        var tableRow = Ti.UI.createTableViewRow({
            height: 50
        });
        var skuView = Ti.UI.createView({
            left: 0,
            width: "33%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var nameView = Ti.UI.createView({
            left: "25%",
            width: "33%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        var qtyView = Ti.UI.createView({
            left: "50%",
            width: "33%",
            height: Ti.UI.Size,
            backgroundColor: "white"
        });
        skuView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Sku
        }));
        nameView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Qty
        }));
        qtyView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Name
        }));
        tableRow.add(skuView);
        tableRow.add(nameView);
        tableRow.add(qtyView);
        skuView = nameView = qtyView = null;
        return tableRow;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "memberlist";
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
    $.__views.groupname = Ti.UI.createLabel({
        text: "James' Friends",
        id: "groupname",
        top: "10"
    });
    $.__views.signupWin.add($.__views.groupname);
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Member List",
        id: "pageTitle",
        top: "10"
    });
    $.__views.signupWin.add($.__views.pageTitle);
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "Invite Member",
        top: "10",
        id: "__alloyId20"
    });
    $.__views.signupWin.add($.__views.__alloyId20);
    $.__views.myTable = Ti.UI.createTableView({
        id: "myTable"
    });
    $.__views.signupWin.add($.__views.myTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tableData = [];
    tableData.push(createRow("Name", "Remove", "Role"));
    tableData.push(createRow("James", "X", "admin"));
    tableData.push(createRow("Matt", "X", "user"));
    $.myTable.setData(tableData);
    tableData = null;
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;