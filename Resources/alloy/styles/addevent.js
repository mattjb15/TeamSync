module.exports = [ {
    isClass: true,
    priority: 10000.0007,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "header",
    style: {
        height: "50dp",
        backgroundColor: "blue"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "appTitle",
    style: {
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#fff"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "appIcon",
    style: {
        width: "50dp",
        height: "50dp",
        left: "0",
        backgroundImage: "/placeholder.png"
    }
} ];