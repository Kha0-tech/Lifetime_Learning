/*


function fibonacci(n: number): number {
  //base
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("fibonacci => ", fibonacci(80));
*/

function fibonacciMemoization(n: number, meno: number[] = []): number {
  if (n <= 1) {
    return 1;
  }
  if (meno[n] !== undefined) return meno[n];

  meno[n] =
    fibonacciMemoization(n - 1, meno) + fibonacciMemoization(n - 2, meno);

  return meno[n];
}

console.log("fibonacciMemoization(80) =", fibonacciMemoization(80));
