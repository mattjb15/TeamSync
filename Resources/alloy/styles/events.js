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
    priority: 10000.0011,
    key: "eventName",
    style: {
        left: "5dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "eventDescription",
    style: {
        left: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "eventDateLabel",
    style: {
        left: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "eventDate",
    style: {
        left: "5dp"
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
    priority: 100000.001,
    key: "groupImage",
    style: {
        width: "50dp",
        height: "50dp",
        right: "0",
        backgroundImage: "/groupImage.png"
    }
} ];