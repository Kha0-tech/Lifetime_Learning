"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposite(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("Invalid deposit amount");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount < this.balance) {
            this.balance -= amount;
        }
    }
    geBlance() {
        return this.balance;
    }
}
const useOne_BankAccount = new BankAccount(0);
useOne_BankAccount.deposite(20000);
console.log("user one amount => ", useOne_BankAccount.geBlance());
