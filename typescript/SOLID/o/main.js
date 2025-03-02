"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreditPayment_1 = require("./CreditPayment");
const PaymentContext_1 = require("./PaymentContext");
const PayPalPayment_1 = require("./PayPalPayment");
const creditCardPayment = new CreditPayment_1.CreditCardPayment();
const processCreditCardPayment = (amount) => {
    const paymentContext = new PaymentContext_1.PaymentContext(creditCardPayment);
    paymentContext.processPayment(amount);
};
processCreditCardPayment(100);
const processPayPalPayment = new PaymentContext_1.PaymentContext(new PayPalPayment_1.PayPalPayment());
processPayPalPayment.processPayment(200);
/**
 *  Real-World Use Cases
 *  1. Payment Process
 *  2. Sorting Alogrithms (Quick sort MergeSort ,bublesort)
 *  3. Compression Algorithms (ZIP ,RAR,GZIP)
 *  4. Authenticaiton Methods (JWT,OAuth,Session-based)
 *  5. Logging Mechanism
 */
