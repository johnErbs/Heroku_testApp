"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var app = Express();
app.set('port', (process.env.PORT || 5000));
app.get("/", function (req, resp) {
    resp.send("Hello World!");
});
console.log("Running on port " + app.get("port"));
app.listen(app.get('port'));
