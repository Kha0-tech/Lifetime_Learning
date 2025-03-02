export class GuestUser {
  constructor(protected guestName: string) {}

  browserContent(): void {
    console.log("Guest ", this.guestName, "si browsing ....");
  }
}
