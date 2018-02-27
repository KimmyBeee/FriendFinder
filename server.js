//Dependencies
//================================================================
var express = require("express");
var bodyParser = require("bodyParser");
var path = require("path");

//Set up express app
//================================================================
var app = express();
var PORT = 3000;

//Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
//================================================================
require("./apps/routing/apiRoutes")(app);
require("./apps/routing/htmlRoutes")(app);

//Listener
//================================================================
app.listen(PORT, function()	{
	console.log("App listening on PORT: " + PORT);
});
