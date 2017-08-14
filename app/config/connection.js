var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
})

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected")
})

module.exports = connection;