"use strict";
class Counter {
    constructor(initialCount) {
        this.count = initialCount;
    }
    increment() {
        this.count++;
    }
}
function increaseNumber(num) {
    return num++;
}
function increaseCount(counter) {
    counter.increment();
}
let number = 10; //value type
let myCounter = new Counter(10);
console.log("myCounter", myCounter.count);
console.log("number  : ", number);
number = increaseNumber(number);
console.log("myCounter", myCounter.count);
console.log("number  : ", number);
increaseCount(myCounter);
console.log("my counter : ", myCounter.count);
