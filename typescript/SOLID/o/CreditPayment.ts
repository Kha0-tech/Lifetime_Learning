import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Process credit card payment", amount);
  }
}
