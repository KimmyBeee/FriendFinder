//Routes to arrays that hold the current user data and possible friends data
var currentUser = require("./data/friends");
var friendBank = require("./data/friends");

module.exports = function(app)	{
	app.get("/api/friends", function(req, res)	{
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res)	{
		for (i = 0; i < friendBank.length; i++)	{
			if (currentUser != friendBank[i])	{
				friendBank.push(currentUser);
			}
		}
	});
}