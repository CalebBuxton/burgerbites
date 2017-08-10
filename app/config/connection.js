var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 8080,
	host: "localhost",
	user: "root",
	password: "",
	database: "bugers_db"
})

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected")
})

module.exports = connection;