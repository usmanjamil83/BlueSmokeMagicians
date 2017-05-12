
// Requiring our user model
var db = require("../models");

// Routes
module.exports = function(app) {

  // home page route setup
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
    
};
