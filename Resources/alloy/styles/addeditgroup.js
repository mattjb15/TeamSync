module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
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
    priority: 100000.0007,
    key: "GroupName",
    style: {
        top: "25",
        width: "75%",
        height: "60",
        hintText: "Group Name"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "GroupDescription",
    style: {
        top: "10",
        width: "75%",
        height: "60",
        hintText: "Group Description"
    }
} ];