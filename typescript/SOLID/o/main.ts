import { CreditCardPayment } from "./CreditPayment";
import { PaymentContext } from "./PaymentContext";
import { PayPalPayment } from "./PayPalPayment";

const creditCardPayment = new CreditCardPayment();
const processCreditCardPayment = (amount: number): void => {
  const paymentContext = new PaymentContext(creditCardPayment);
  paymentContext.processPayment(amount);
};

processCreditCardPayment(100);

const processPayPalPayment = new PaymentContext(new PayPalPayment());
processPayPalPayment.processPayment(200);

/**
 *  Real-World Use Cases
 *  1. Payment Process
 *  2. Sorting Alogrithms (Quick sort MergeSort ,bublesort)
 *  3. Compression Algorithms (ZIP ,RAR,GZIP)
 *  4. Authenticaiton Methods (JWT,OAuth,Session-based)
 *  5. Logging Mechanism
 */
