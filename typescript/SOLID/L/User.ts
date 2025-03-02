import { Authenticatable } from "./Authenticatable";

export class User implements Authenticatable {
  constructor(protected username: string, protected password: string) {
    this.username = username;
    this.password = password;
  }

  authenticate(): boolean {
    console.log("Authenticating ", this.username);
    return this.password === "123";
  }
}
