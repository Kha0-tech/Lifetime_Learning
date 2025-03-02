export class User {
  private _username: string;
  private _password: string;

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  set username(username: string) {
    this._username = username;
  }

  set password(passwrod: string) {
    this._password = passwrod;
  }
}
