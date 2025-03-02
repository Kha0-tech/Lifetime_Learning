"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    set username(username) {
        this._username = username;
    }
    set password(passwrod) {
        this._password = passwrod;
    }
}
exports.User = User;
