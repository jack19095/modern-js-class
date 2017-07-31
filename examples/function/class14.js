function functionName1(param1, param2) {
  // statements
  return 42 + param1 + param2;
}

const functionName2 = function(param1, param2) {
  // statements
  return 42;
}

let returnValue1 = functionName1(5, 10);
let returnValue2 = functionName2();
console.log(returnValue1, returnValue2);