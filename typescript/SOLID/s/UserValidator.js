"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidatro = void 0;
class UserValidatro {
    validator(user) {
        if (user.username.length < 3 || user.password.length < 6) {
            return false;
        }
        return true;
    }
}
exports.UserValidatro = UserValidatro;
