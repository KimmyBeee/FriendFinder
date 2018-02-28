//Route to the array that holds the data for all possible friends.
console.log("apiRoutes is loaded");
var people = require("../data/friends");


module.exports = function(app)	{

	app.get("/api/friends", function(req, res)	{
		res.json(people);
	});	

	app.post("/api/friends", function(req, res)	{
		var foundFriend = false;
		for (i = 0; i < people.friendBank.length; i++){
			if (people.currentUser = people.friendBank[i])	{
				foundFriend = true;
			}
		}
		if (!foundFriend)	{
			people.friendBank.push(people.currentUser[0]);
			res.json(people.friendBank);
			console.log(people.friendBank);
		}
	})	

	app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    people.currentUser = [];
    people.friendBank = [];

    console.log(people);
  });
	//app.post("")
	
}