// Importing orm.js to create functions that will interact with the db
const orm = require("./config/orm.js");

const burger = {
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
    delete: function(id, cb) {
        orm.delete("burgers", id, (res) => {
            cb(res);
        });
    }
};

// Export the database function for the controller
module.exports = burger;


