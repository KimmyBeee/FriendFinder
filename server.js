//Dependencies
//================================================================
var express = require("express");
var bodyParser = require("body-Parser");
var path = require("path");

//Set up express app
//================================================================
var app = express();
var PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

//Router
//================================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//Listener
//================================================================
app.listen(PORT, function()	{
	console.log("App listening on PORT: " + PORT);
});
