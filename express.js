const express = require("express");
const Gamedig = require("gamedig");
let app = express();

app.get("/serverinfo/csgo", function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    Gamedig.query({
        type: "csgo",
        host: "85.10.207.134"
    }).then((state) => {
        res.send(JSON.stringify(state));
    }).catch((error) => {
        res.send(jsonErrorServerOffline());
    });
});

app.get("/serverinfo/scum", function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    Gamedig.query({
        type: "unreal",
        host: "176.57.168.14",
        port: "28702",
        port_query: "8889"
    }).then((state) => {
        res.send(JSON.stringify(state));
    }).catch((error) => {
        res.send(jsonErrorServerOffline());
    });
});

let server = app.listen(8080, "127.0.0.1", function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

function jsonErrorServerOffline() {
    return JSON.stringify({
        code: 404,
        error: "Server is offline"
    });
}