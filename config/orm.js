// Importing MySQL Connection
const connection = require("../config/connection.js");

// Print Question Mark Function
function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

// Helper function to convert key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string is with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

// Object for all our SQL statement functions
let orm = {
    // All
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Create
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString)

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Delete
    delete: function(table, id, cb) {
        connection.query("DELETE FROM ?? WHERE is = ?", [table,id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm
