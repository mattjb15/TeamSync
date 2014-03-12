function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventsRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.eventsRow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "eventsRow"
    });
    $.__views.eventsRow && $.addTopLevelView($.__views.eventsRow);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "Event Name",
        id: "__alloyId6"
    });
    $.__views.eventsRow.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Event description Event description Event description",
        id: "__alloyId7"
    });
    $.__views.eventsRow.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.eventsRow.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Date:",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "00/00/0000",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.Name.text = args.eventName;
    $.eventDescription.text = args.eventDescription;
    $.eventDate.text = args.eventDate;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;