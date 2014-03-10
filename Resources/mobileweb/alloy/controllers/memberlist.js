function Controller() {
<<<<<<< HEAD
    function loadMemberSearch() {
        var win = Alloy.createController("membersearch").getView();
        win.open();
=======
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
>>>>>>> b4aa9bb7435d876b0d700cf25e28d55b2af14f1c
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "memberlist";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
<<<<<<< HEAD
    $.__views.signinWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signinWin"
    });
    $.__views.signinWin && $.addTopLevelView($.__views.signinWin);
=======
    $.__views.signupWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "signupWin"
    });
    $.__views.signupWin && $.addTopLevelView($.__views.signupWin);
>>>>>>> b4aa9bb7435d876b0d700cf25e28d55b2af14f1c
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
<<<<<<< HEAD
    $.__views.signinWin.add($.__views.header);
=======
    $.__views.signupWin.add($.__views.header);
>>>>>>> b4aa9bb7435d876b0d700cf25e28d55b2af14f1c
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
<<<<<<< HEAD
=======
    $.__views.groupname = Ti.UI.createLabel({
        text: "James' Friends",
        id: "groupname",
        top: "10"
    });
    $.__views.signupWin.add($.__views.groupname);
>>>>>>> b4aa9bb7435d876b0d700cf25e28d55b2af14f1c
    $.__views.pageTitle = Ti.UI.createLabel({
        text: "Member List",
        id: "pageTitle",
        top: "10"
    });
<<<<<<< HEAD
    $.__views.signinWin.add($.__views.pageTitle);
    $.__views.__alloyId22 = Ti.UI.createButton({
        title: "Invite User",
        top: "10",
        width: "75%",
        id: "__alloyId22"
    });
    $.__views.signinWin.add($.__views.__alloyId22);
    loadMemberSearch ? $.__views.__alloyId22.addEventListener("click", loadMemberSearch) : __defers["$.__views.__alloyId22!click!loadMemberSearch"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.appIcon!click!Alloy.Globals.loadIndex"] && $.__views.appIcon.addEventListener("click", Alloy.Globals.loadIndex);
    __defers["$.__views.__alloyId22!click!loadMemberSearch"] && $.__views.__alloyId22.addEventListener("click", loadMemberSearch);
=======
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
>>>>>>> b4aa9bb7435d876b0d700cf25e28d55b2af14f1c
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;