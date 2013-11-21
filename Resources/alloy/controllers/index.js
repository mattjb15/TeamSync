function Controller() {
    function loadLogin() {
        var win = Alloy.createController("signin").getView();
        win.open();
    }
    function loadHomepage() {
        var win = Alloy.createController("homepage").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "red",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.signin = Ti.UI.createLabel({
        text: "Sign In",
        id: "signin",
        top: "10"
    });
    $.__views.index.add($.__views.signin);
    loadLogin ? $.__views.signin.addEventListener("click", loadLogin) : __defers["$.__views.signin!click!loadLogin"] = true;
    $.__views.homepage = Ti.UI.createLabel({
        text: "Hompage",
        id: "homepage",
        top: "10"
    });
    $.__views.index.add($.__views.homepage);
    loadHomepage ? $.__views.homepage.addEventListener("click", loadHomepage) : __defers["$.__views.homepage!click!loadHomepage"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.signin!click!loadLogin"] && $.__views.signin.addEventListener("click", loadLogin);
    __defers["$.__views.homepage!click!loadHomepage"] && $.__views.homepage.addEventListener("click", loadHomepage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;