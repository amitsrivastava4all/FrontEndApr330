"use strict";
exports.__esModule = true;
var user_1 = require("../model/user");
var validation_1 = require("../helpers/validation");
var store_1 = require("../db/store");
function register(userid, pwd) {
    var userObject = new user_1.User(userid, pwd);
    var result = validation_1.validate(userObject);
    if (result.type == 'Success') {
        // call store
        console.log(store_1.store(userObject) ? "Register SuccessFully" : "Can't Register");
    }
    else {
        console.log("Can't Register");
        console.log(result.msg);
    }
}
exports.register = register;
