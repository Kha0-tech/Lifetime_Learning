function myFun<T>(value: T): T {
  return value;
}

const valueOne = myFun<string>("This is Generic function string");
const valueTwo = myFun<number>(28);

//Using Tulples
function myFunTwo<T, U>(argOne: T, argTwo: U): [T, U] {
  return [argOne, argTwo];
}

const tupleValueOne = myFunTwo<number, string>(25, "geneic value ");
console.log("Geneirc return tuple multiple value : ", tupleValueOne);

//Using Object
function createObject<T, U>(
  valueOne: T,
  valueTwo: U
): { valueOne: T; valueTwo: U } {
  return { valueOne, valueTwo };
}

const myCrateobject = createObject<string, string>(
  "bron for this",
  "For the Glory"
);
console.log("Generic return object : ", myCrateobject);
