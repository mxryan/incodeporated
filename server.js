var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
var db = require("./models");
// Setting up port and requiring models for syncing
var app = express(); 
var PORT = process.env.PORT || 3000;


// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());
app.engine(
  "handlebars", 
    exphbs ({
      defaultLayout: "main"
    })
);
app.set("view-engine", "handlebars");

// Requiring our routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});