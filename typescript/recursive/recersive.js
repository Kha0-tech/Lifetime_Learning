"use strict";
function recursive_one(total, index = 0, totalValue = 0) {
    if (index === total) {
        return totalValue;
    }
    return recursive_one(total, index + 1, totalValue + index);
}
console.log(recursive_one(5)); // 10 * 9 * 8
function recursive_two(num) {
    if (num <= 1) {
        return 1; //base cause
    }
    return num * recursive_two(num - 1); //Recursieve case
}
console.log("recurise_two => ", recursive_two(10));
function factorial(n) {
    if (n <= 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}
// Usage
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1
