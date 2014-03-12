function Controller() {
    function doClick() {
        var response;
        var url = "http://192.168.0.21/teamsync/getusers.php?search_string=" + $.search.value;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                response = JSON.parse(this.responseText);
                Ti.API.info(response[0].firstName);
                Ti.API.info(response[1].firstName);
                Ti.API.info(response);
                var data = [];
                for (var i = 0; response.length > i; i++) {
                    data[i] = Alloy.createController("membersearchRow", {
                        names: response[i]
                    }).getView();
                    $.mainList.appendRow(data[i]);
                }
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "membersearch";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homepageWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "homepageWin"
    });
    $.__views.homepageWin && $.addTopLevelView($.__views.homepageWin);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black",
        id: "header"
    });
    $.__views.homepageWin.add($.__views.header);
    $.__views.appIcon = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png",
        id: "appIcon"
    });
    $.__views.header.add($.__views.appIcon);
    $.__views.welcomeMessage = Ti.UI.createLabel({
        text: "Welcome username",
        id: "welcomeMessage"
    });
    $.__views.header.add($.__views.welcomeMessage);
    $.__views.avatar = Ti.UI.createView({
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/man-silhouette.png",
        id: "avatar"
    });
    $.__views.header.add($.__views.avatar);
    $.__views.search = Ti.UI.createTextField({
        id: "search",
        top: "25",
        width: "75%",
        height: "60",
        hintText: "username"
    });
    $.__views.homepageWin.add($.__views.search);
    $.__views.__alloyId27 = Ti.UI.createButton({
        title: "Search",
        top: "10",
        width: "75%",
        id: "__alloyId27"
    });
    $.__views.homepageWin.add($.__views.__alloyId27);
    doClick ? $.__views.__alloyId27.addEventListener("click", doClick) : __defers["$.__views.__alloyId27!click!doClick"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        id: "mainList"
    });
    $.__views.homepageWin.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId27!click!doClick"] && $.__views.__alloyId27.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;