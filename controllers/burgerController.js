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
   burger.insertOne(req.body.name, function (result) {
       console.log(result);
       res.json(result);
   });
});

// Put route
router.put("/api/burgers/eat/:id", function(req, res) {
    var condition = `id = ${req.params.id};`;
    var boolean = req.body.eat;

    burger.updateOne(boolean, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

// Delete route
router.deleteOne("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    burger.deleteOne(condition, (result) => {
        if (result.affectedRows === 0) {
            return res.statu(404).end();
        }
        res.status(202).end();
    });
});

// Exporting for server.js
module.exports = router;