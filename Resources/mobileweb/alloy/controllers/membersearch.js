function Controller() {
    function handleClick(e) {
        alert(e.row.customObject.some.complex.object);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "membersearch";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.membersearch = Ti.UI.createWindow({
        id: "membersearch"
    });
    $.__views.membersearch && $.addTopLevelView($.__views.membersearch);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.membersearch.add($.__views.table);
    handleClick ? $.__views.table.addEventListener("click", handleClick) : __defers["$.__views.table!click!handleClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 15 > i; i++) data.push(Alloy.createController("row").getView());
    $.table.setData(data);
    $.index.open();
    __defers["$.__views.table!click!handleClick"] && $.__views.table.addEventListener("click", handleClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;