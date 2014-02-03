var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.loadIndex = function() {
    var win = Alloy.createController("index").getView();
    win.open();
};

Alloy.createController("index");