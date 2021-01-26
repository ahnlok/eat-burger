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
router.post("/api/burgers", function(req, res) {
   burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
       console.log(result);
       res.json({ id: result.insertId });
   });
});

// Put route
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition,  function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
        res.status(202).end();
        }
    });
});

// Delete route
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

// Exporting for server.js
module.exports = router;