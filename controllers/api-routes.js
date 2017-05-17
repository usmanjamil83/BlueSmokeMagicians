
// (((((((NEW CODE)))))))

var express = require("express");
var db = require("../models");

var User = db.User;

// TEMPORARY!!! REQUIRING LOCAL, HARD-CODED MATCHES IN sampleusers.js
// var sampleusers = require("../db/sampleusers");


module.exports = function(app) {

app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

// POST route for saving new user info
app.post("/api/users", function(req, res) {
  var userData = req.body;

  db.User.create({
    name: userData.name,
    quote: userData.quote,
    gender: userData.gender,
    age: userData.age
  }).then(function(data) {
    res.json(data).redirect('/questions');

  });
});

// PUT route for updating user info

app.put("/api/users/:id", function(req, res) {
  db.User.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Find all the matches
  app.get("/api/users/:match", function(req, res) {
    db.Users.findOne({
      where: {
        match: req.params.match
      }
    }).then(function(user) {
      res.json(user);
    });

  });


  // TEMPORARY!!! FINDING ALL LOCAL, HARD-CODED MATCHES IN sampleusers.js
  // Find all the matches


};
