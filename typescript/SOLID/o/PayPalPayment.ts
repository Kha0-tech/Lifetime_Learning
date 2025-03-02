import { PaymentStrategy } from "./PaymentStrategy";
export class PayPalPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Process paypal payment", amount);
  }
}
