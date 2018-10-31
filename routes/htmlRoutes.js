var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");
const sql = require("sequelize");

module.exports = function (app) {
  app.get("/", function(req, res) {
      res.render("index.handlebars", {
        msg: "Welcome!"
      });
    
  });
  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function (req, res) {
    console.log("members hit");
    if (!req.user) {
      return res.redirect("/");   
    }
    console.log("members hit 2");
    res.sendFile(path.join(__dirname, "../public/members.html"));
  })

  app.get("/stats", function(req, res) {
    res.render("stats.handlebars");
  });

    //get to the quiz page
  app.get("/quiz/:quizId", (req, res) => {
    if (!req.user) {
      res.redirect("/login")
    }
    else {
      res.render("questions.handlebars", {
        quiz: req.params.quizId
      });
    }
  });

   //Render 404 page for any unmatched routes
   app.get("*", function (req, res) {
    console.log("hit the star route");
    res.render("404");
  });
};
