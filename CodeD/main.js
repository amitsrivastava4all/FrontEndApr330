"use strict";
exports.__esModule = true;
var register_1 = require("./views/register");
function runApp() {
    // Call to Register
    var userid = "ram";
    var pwd = "123";
    register_1.register(userid, pwd);
    // Call to Login
}
runApp();
