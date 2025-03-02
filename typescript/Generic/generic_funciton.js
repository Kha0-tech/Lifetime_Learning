"use strict";
function myFun(value) {
    return value;
}
const valueOne = myFun("This is Generic function string");
const valueTwo = myFun(28);
//Using Tulples
function myFunTwo(argOne, argTwo) {
    return [argOne, argTwo];
}
const tupleValueOne = myFunTwo(25, "geneic value ");
console.log("Geneirc return tuple multiple value : ", tupleValueOne);
//Using Object
function createObject(valueOne, valueTwo) {
    return { valueOne, valueTwo };
}
const myCrateobject = createObject("bron for this", "For the Glory");
console.log("Generic return object : ", myCrateobject);
