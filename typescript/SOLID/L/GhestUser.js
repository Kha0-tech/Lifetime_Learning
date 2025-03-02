"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestUser = void 0;
class GuestUser {
    constructor(guestName) {
        this.guestName = guestName;
    }
    browserContent() {
        console.log("Guest ", this.guestName, "si browsing ....");
    }
}
exports.GuestUser = GuestUser;
