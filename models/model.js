var express = require("express");
var app = express();

var logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("public"));

var mongoose = require("mongoose");

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/NYTReact');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to MongoDB!")
});