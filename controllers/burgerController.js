var express = require("express");

var router = express.Router();

// Importing the model (burger.js) to us its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Post route
router.post("/burgers", function(req, res) {
    burger.insertOne([
        "name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});

// Put route
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        eat: true
    }, condition, function(data) {
        res.redirect("/");
    });
});

// Delete route
// router.deleteOne("/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.deleteOne(condition, (result) => {
//         res.redirect("/");
//     });
// });

// Exporting for server.js
module.exports = router;