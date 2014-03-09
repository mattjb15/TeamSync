function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "noticesRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.noticesRow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "noticesRow"
    });
    $.__views.noticesRow && $.addTopLevelView($.__views.noticesRow);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId26"
    });
    $.__views.noticesRow.add($.__views.__alloyId26);
    $.__views.topRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "topRowContainer"
    });
    $.__views.__alloyId26.add($.__views.topRowContainer);
    $.__views.noticeName = Ti.UI.createLabel({
        width: "100dp",
        height: "50dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Notice Subject",
        id: "noticeName"
    });
    $.__views.topRowContainer.add($.__views.noticeName);
    $.__views.middleRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "middleRowContainer"
    });
    $.__views.__alloyId26.add($.__views.middleRowContainer);
    $.__views.noticeDescription = Ti.UI.createLabel({
        left: "5",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "The notice body goes here!!!",
        id: "noticeDescription"
    });
    $.__views.middleRowContainer.add($.__views.noticeDescription);
    $.__views.bottomRowContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "bottomRowContainer"
    });
    $.__views.__alloyId26.add($.__views.bottomRowContainer);
    $.__views.noticeDateLabel = Ti.UI.createLabel({
        text: "Posted on:",
        id: "noticeDateLabel"
    });
    $.__views.bottomRowContainer.add($.__views.noticeDateLabel);
    $.__views.noticeDate = Ti.UI.createLabel({
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        id: "noticeDate"
    });
    $.__views.bottomRowContainer.add($.__views.noticeDate);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.noticeName.text = args.noticeName;
    $.noticeDescription.text = args.noticeDescription;
    $.noticeDate.text = args.noticeDate;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;