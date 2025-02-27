class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposite(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Invalid deposit amount");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount < this.balance) {
      this.balance -= amount;
    }
  }

  public geBlance(): number {
    return this.balance;
  }
}

const useOne_BankAccount = new BankAccount(0);

useOne_BankAccount.deposite(20000);
console.log("user one amount => ", useOne_BankAccount.geBlance());
