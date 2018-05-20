"use strict";
exports.__esModule = true;
function validate(userObject) {
    if (isBlank(userObject.userid) && isBlank(userObject.pwd)) {
        return { msg: 'Userid is Blank and Pwd is Blank', type: 'Error' };
    }
    else {
        return { msg: '', type: 'Success' };
    }
}
exports.validate = validate;
function isBlank(str) {
    return str.trim().length == 0;
}
