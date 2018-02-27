//Dependancies
//==================================================
var path = require("path");

//Routing
//==================================================

//Set up home, survey and default routes for export to server.js
module.exports = function(app)	{

	//Set route to GET the home page for Find A Friend
	app.get("/". function(req, res)	{
		res.sendfile(pathe.join(__dirname, "./public/home.html"));
	});

	//Set route to GET the survey page
	app.get("/survey", function(req, res)	{
		res.sendFile(path.join(__dirname, "./public/survey.html"));	
	});

	//Set a default path to home.html
	app.get("*", function(req, res)	{
		res.sendFile(path.join(__dirname, "./public/home.html"));
	});
};
