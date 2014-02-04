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
    function loadAddNotice() {
        var win = Alloy.createController("addnotice").getView();
        win.open();
    }
    function loadNotices() {
        var win = Alloy.createController("notices").getView();
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
    $.__views.signIn = Ti.UI.createLabel({
        text: "Sign In",
        id: "signIn",
        top: "10"
    });
    $.__views.index.add($.__views.signIn);
    loadLogin ? $.__views.signIn.addEventListener("click", loadLogin) : __defers["$.__views.signIn!click!loadLogin"] = true;
    $.__views.homepage = Ti.UI.createLabel({
        text: "Hompage",
        id: "homepage",
        top: "10"
    });
    $.__views.index.add($.__views.homepage);
    loadHomepage ? $.__views.homepage.addEventListener("click", loadHomepage) : __defers["$.__views.homepage!click!loadHomepage"] = true;
    $.__views.addEditGroup = Ti.UI.createLabel({
        text: "Add Edit Group",
        id: "addEditGroup",
        top: "10"
    });
    $.__views.index.add($.__views.addEditGroup);
    loadAddeditgroup ? $.__views.addEditGroup.addEventListener("click", loadAddeditgroup) : __defers["$.__views.addEditGroup!click!loadAddeditgroup"] = true;
    $.__views.signUp = Ti.UI.createLabel({
        text: "Sign Up",
        id: "signUp",
        top: "10"
    });
    $.__views.index.add($.__views.signUp);
    loadSignup ? $.__views.signUp.addEventListener("click", loadSignup) : __defers["$.__views.signUp!click!loadSignup"] = true;
    $.__views.addEvent = Ti.UI.createLabel({
        text: "Add Event",
        id: "addEvent",
        top: "10"
    });
    $.__views.index.add($.__views.addEvent);
    loadAddEvent ? $.__views.addEvent.addEventListener("click", loadAddEvent) : __defers["$.__views.addEvent!click!loadAddEvent"] = true;
    $.__views.addNotice = Ti.UI.createLabel({
        text: "Add Notice",
        id: "addNotice",
        top: "10"
    });
    $.__views.index.add($.__views.addNotice);
    loadAddNotice ? $.__views.addNotice.addEventListener("click", loadAddNotice) : __defers["$.__views.addNotice!click!loadAddNotice"] = true;
    $.__views.Notices = Ti.UI.createLabel({
        text: "Notices",
        id: "Notices",
        top: "10"
    });
    $.__views.index.add($.__views.Notices);
    loadNotices ? $.__views.Notices.addEventListener("click", loadNotices) : __defers["$.__views.Notices!click!loadNotices"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    loadLogin();
    __defers["$.__views.signIn!click!loadLogin"] && $.__views.signIn.addEventListener("click", loadLogin);
    __defers["$.__views.homepage!click!loadHomepage"] && $.__views.homepage.addEventListener("click", loadHomepage);
    __defers["$.__views.addEditGroup!click!loadAddeditgroup"] && $.__views.addEditGroup.addEventListener("click", loadAddeditgroup);
    __defers["$.__views.signUp!click!loadSignup"] && $.__views.signUp.addEventListener("click", loadSignup);
    __defers["$.__views.addEvent!click!loadAddEvent"] && $.__views.addEvent.addEventListener("click", loadAddEvent);
    __defers["$.__views.addNotice!click!loadAddNotice"] && $.__views.addNotice.addEventListener("click", loadAddNotice);
    __defers["$.__views.Notices!click!loadNotices"] && $.__views.Notices.addEventListener("click", loadNotices);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;