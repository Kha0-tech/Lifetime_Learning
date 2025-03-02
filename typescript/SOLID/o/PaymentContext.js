"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContext = void 0;
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    processPayment(amount) {
        this.strategy.processPayment(amount);
    }
}
exports.PaymentContext = PaymentContext;
