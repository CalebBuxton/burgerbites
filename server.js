var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"} ));
app.set("view engine", "handlebars");

app.use("/", routes);
app.listen(PORT);