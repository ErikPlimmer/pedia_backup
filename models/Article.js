const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  url: {type: String},
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
