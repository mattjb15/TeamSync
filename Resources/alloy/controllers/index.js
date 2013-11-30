function Controller() {
    function loadLogin() {
        var win = Alloy.createController("signin").getView();
        win.open();
    }
    function loadHomepage() {
        var win = Alloy.createController("homepage").getView();
        win.open();
    }
    function loadAddeditgroup() {
        var win = Alloy.createController("addeditgroup").getView();
        win.open();
    }
    function loadSignup() {
        var win = Alloy.createController("signup").getView();
        win.open();
    }
    function loadAddEvent() {
        var win = Alloy.createController("addevent").getView();
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
    $.__views.addeditgroup = Ti.UI.createLabel({
        text: "Add Edit Group",
        id: "addeditgroup",
        top: "10"
    });
    $.__views.index.add($.__views.addeditgroup);
    loadAddeditgroup ? $.__views.addeditgroup.addEventListener("click", loadAddeditgroup) : __defers["$.__views.addeditgroup!click!loadAddeditgroup"] = true;
    $.__views.signup = Ti.UI.createLabel({
        text: "Sign Up",
        id: "signup",
        top: "10"
    });
    $.__views.index.add($.__views.signup);
    loadSignup ? $.__views.signup.addEventListener("click", loadSignup) : __defers["$.__views.signup!click!loadSignup"] = true;
    $.__views.addevent = Ti.UI.createLabel({
        text: "Add Event",
        id: "addevent",
        top: "10"
    });
    $.__views.index.add($.__views.addevent);
    loadAddEvent ? $.__views.addevent.addEventListener("click", loadAddEvent) : __defers["$.__views.addevent!click!loadAddEvent"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.signin!click!loadLogin"] && $.__views.signin.addEventListener("click", loadLogin);
    __defers["$.__views.homepage!click!loadHomepage"] && $.__views.homepage.addEventListener("click", loadHomepage);
    __defers["$.__views.addeditgroup!click!loadAddeditgroup"] && $.__views.addeditgroup.addEventListener("click", loadAddeditgroup);
    __defers["$.__views.signup!click!loadSignup"] && $.__views.signup.addEventListener("click", loadSignup);
    __defers["$.__views.addevent!click!loadAddEvent"] && $.__views.addevent.addEventListener("click", loadAddEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;