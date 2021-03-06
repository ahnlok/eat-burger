var express = require("express");

var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the apllication directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});