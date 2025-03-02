"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.username = username;
        this.password = password;
    }
    authenticate() {
        console.log("Authenticating ", this.username);
        return this.password === "123";
    }
}
exports.User = User;
