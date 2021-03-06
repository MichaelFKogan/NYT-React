
//DEPENDENCIES
// ===================================================

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Article = require("./models/schema");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));




//MONGOOSE
// ===================================================

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/NYT-React");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});




// ROUTES
// ===================================================


// GET "/"
// =================================================

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
   
     res.sendFile(__dirname + "/public/index.html");

  Article.create({
    title: "1245",
    date: Date.now(),
    url: "12345"
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
   console.log("Created")


});





// GET "/api" 
// =================================================

// app.get("/api/saved", function(req, res) {});

// app.post("/api/saved", function(req, res) {});

// app.delete("/api/saved", function(req, res) {});








// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  // Articles.find({}).sort([
  //   ["date", "descending"]
  // ]).limit(5).exec(function(err, doc) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send(doc);
  //   }
  // });
});










// POST "/api"
// =================================================

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body);

  console.log("BODY: " + req.body.articles);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time

 Article.create({
    articles: "Article Summary",
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});





//   Articles.create({
//     articles: req.body.articles,
//     date: Date.now()
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });




//SERVER
// ===================================================
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
