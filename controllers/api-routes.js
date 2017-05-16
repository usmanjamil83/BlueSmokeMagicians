var express = require("express");
var db = require("../models");

// TEMPORARY!!! REQUIRING LOCAL, HARD-CODED MATCHES IN sampleusers.js
var sampleusers = require("../db/sampleusers");

module.exports = function(app) {

// POST route for saving new user info
app.post("/api/users", function(req, res) {
  db.User.create(req.body).then(function(result) {
    res.json(result);
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
    }).then(function(result) {
      res.json(result);
    });
  });

  // TEMPORARY!!! FINDING ALL LOCAL, HARD-CODED MATCHES IN sampleusers.js
  // Find all the matches
  app.get("/api/users", function(req, res) {
    res.json(sampleusers);
  });

};
