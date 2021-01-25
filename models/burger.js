// Importing orm.js to create functions that will interact with the db
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    // Create
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Update
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Delete
    delete: function(condition, cb) {
        orm.delete("burgers", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database function for the controller
module.exports = burger;


