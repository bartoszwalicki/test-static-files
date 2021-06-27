var express = require("express");
var cors = require("cors");
var app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/static", express.static(__dirname + "/static"));

var server = app.listen(PORT);
