module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0051,
    key: "verticalRowContainer",
    style: {
        layout: "vertical",
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "header",
    style: {
        height: "50dp",
        backgroundColor: "white",
        borderWidth: "1",
        borderColor: "black"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "appIcon",
    style: {
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/ic_launcher.png"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "appTitle",
    style: {
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "black"
    }
}, {
    isId: true,
    priority: 100000.005,
    key: "noticeName",
    style: {
        width: "100dp",
        height: "50dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0052,
    key: "topRowContainer",
    style: {
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0053,
    key: "middleRowContainer",
    style: {
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0054,
    key: "bottomRowContainer",
    style: {
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0055,
    key: "noticeDescription",
    style: {
        left: "5",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0056,
    key: "noticeDate",
    style: {
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
} ];