"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(_userid, _pwd) {
        this._userid = _userid;
        this._pwd = _pwd;
    }
    Object.defineProperty(User.prototype, "userid", {
        get: function () {
            return this._userid;
        },
        set: function (userid) {
            this._userid = userid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "pwd", {
        get: function () {
            return this._pwd;
        },
        set: function (pwd) {
            this._pwd = pwd;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
