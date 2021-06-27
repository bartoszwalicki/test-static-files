var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use("/static", express.static(__dirname + "/static"));

var server = app.listen(5000);
