function exampleOne(arr: number[], index: number): number | null {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  }
  return null;
}
let num: number[] = [
  64, 12, 3, 34, 54,

  313, 646, 1354, 6, 16, 16, 51, 41, 6, 16, 51, 16, 4, 6,
];

const index: number = 5;

const result = exampleOne(num, index);
console.log("result => ", result);
