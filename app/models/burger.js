var handler = require("../config/orm.js");

var burger = {
	selectAll: function() {
		handler.selectAll()
	},

	insertOne: function() {
		handler.insertOne()
	},

	updateOne: function() {
		handler.updateOne()
	}
};

module.exports = burger;