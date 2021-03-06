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
    priority: 10000.0047,
    key: "Label",
    style: {
        width: "100dp",
        height: "100dp"
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
    priority: 100000.0046,
    key: "groupImage",
    style: {
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/groupImage.png"
    }
}, {
    isId: true,
    priority: 100000.0048,
    key: "noticeName",
    style: {
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
} ];