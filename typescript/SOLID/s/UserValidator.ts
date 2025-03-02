import { User } from "./User";

export class UserValidatro {
  validator(user: User): boolean {
    if (user.username.length < 3 || user.password.length < 6) {
      return false;
    }
    return true;
  }
}
