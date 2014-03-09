function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "membersearchRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.membersearchRow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "membersearchRow"
    });
    $.__views.membersearchRow && $.addTopLevelView($.__views.membersearchRow);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId24"
    });
    $.__views.membersearchRow.add($.__views.__alloyId24);
    $.__views.name = Ti.UI.createLabel({
        text: "row",
        id: "name"
    });
    $.__views.__alloyId24.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.names;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;