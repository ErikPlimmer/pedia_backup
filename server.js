const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const APIRoutes = require("./routes/API");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

    // Add API Routes
    // app.use("/api/article", APIRoutes);
    // A GET route for scraping the echoJS website
    app.get("/scrape-baby", function(req, res) {
        let name = "baby"
        // First, we grab the body of the html with request
        axios.get(`https://www.parenting.com/${name}`).then(function(response) {
          // Then, we load that into cheerio and save it to $ for a shorthand selector
          var $ = cheerio.load(response.data);

          // Now, we grab every h2 within an article tag, and do the following:
          let articleArr = []
          $("div h3").each(function(i, element) {
            // Save an empty result object
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
              .children("a")
              .text();
            result.link = $(this)
              .children("a")
              .attr("href");
              result.second = $(this)
              .children("a")
              .attr("href");
            result.headline = $(this)
              .children("meredith-views-body-wrapper")
              .children("dek-or-body")  
              .text()
              .trim()
            result.type = name

            // Create a new Article using the `result` object built from scraping
            let articleCreation = db.Article.create(result)
              .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
              })
              .catch(function(err) {
                // If an error occurred, send it to the client
                return res.json(err);
              });
              articleArr.push(articleCreation)

          });

          Promise.all(articleArr).then(res.end())
          // after creating => gather all articles and using res.json() to send to client side
      });
    });

    app.get('/get-articles-baby', (req, res) => {
      db.Article.find()
      .then(result  => {
        // console.log(result, "dbArticle from database");
        res.json(result)
      })
    });

    app.get('/delete-articles', (req, res) => {
      db.Article.delete()
      .then(result  => {
        console.log(result, "dbArticle from database");
        res.json(result)
      })
    });

    app.post('/save-articles', (req, res) => {
      db.Article.create()
      .then(result  => {
        console.log(result, "dbArticle from database");
        res.json(result)
      })
    });

// Send every request to the React app
// Define any API routes before this runs


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PediaPediaDB");

var mongoosedb = mongoose.connection;

mongoosedb.on('error', function(err){
  console.log('Mongoose Error: ', err);
});

mongoosedb.once('open', function(){
  console.log('Mongoose connection successful.');
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
