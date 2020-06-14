var express = require("express");
var mongojs = require("mongojs");
var app = express();

app.use(express.static("public"));

var databaseUrl =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
var collections = ["comments"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
  console.log("Database Error:", error);
});

app.get("/uplaod", function (req, res) {});

app.get("/delete", function (req, res) {});

app.listen(000, function () {
  console.log("App running on port 8000!");
});
