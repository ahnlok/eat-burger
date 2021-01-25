// Importing orm.js to create functions that will interact with the db
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    // Create
    insertOne: function(vals, cb) {
        orm.insertOne("burgers", "name", vals, function(res) {
            cb(res);
        });
    },
    // Update
    updateOne: function(boolean, condition, cb) {
        orm.updateOne("burgers", "eat", boolean, condition, function(res) {
            cb(res);
        });
    },
    // Delete
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database function for the controller
module.exports = burger;


