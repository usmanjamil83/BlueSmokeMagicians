//Blue Smoke Magicians server setup
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Routes 
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync(
	// { force: true } ??
	).then(function() {
		app.listen(PORT, function() {
			console.log("App listening on PORT " + PORT);
		});
	});