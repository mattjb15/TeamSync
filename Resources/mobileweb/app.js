var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.loadIndex = function() {
    var win = Alloy.createController("homepage").getView();
    win.open();
};

Alloy.Globals.closeHomepage = function() {
    var win = Alloy.createController("homepage").getView();
    win.close();
};

Alloy.Globals.closeGroupHomepage = function() {
    var win = Alloy.createController("groupHomepage").getView();
    win.close();
};

Alloy.createController("index");