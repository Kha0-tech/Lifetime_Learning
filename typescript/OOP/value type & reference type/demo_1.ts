class Counter {
  count: number;
  constructor(initialCount: number) {
    this.count = initialCount;
  }

  increment() {
    this.count++;
  }
}

function increaseNumber(num: number): number {
  return num++;
}
function increaseCount(counter: Counter): void {
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
