"use strict";
exports.__esModule = true;
var db_1 = require("./db");
function store(userObject) {
    db_1.userArray.push(userObject);
    console.log("Inside Array ", db_1.userArray);
    return true;
}
exports.store = store;
