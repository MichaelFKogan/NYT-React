var mongoose = require("mongoose");

var Schema = mongoose.Schema;

	var ArticleSchema = new Schema({
	  title:  String,
	  date: Date,
	  url:   String
	});

var Article = mongoose.model("NYTArticles", ArticleSchema);

module.exports = Article;