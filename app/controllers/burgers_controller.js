var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

//CREATE ROUTES HERE

router.get("/", function(req, result) {
	burgers.selectAll(function (data) {
		var object = {
			burgers: data
		};
		res.render("index", object);
	});
});

router.post("/", function(req, result){
	burgers.insertOne(req.body.name, function() {
		res.redirect("/");
	});
});

router.put("/:id", function (req, result) {
	var condition = "id = " + req.params.id;
	burgers.updateOne(condition, function() {
		res.redirect("/");
	});
});

module.exports = router;