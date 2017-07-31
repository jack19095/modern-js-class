const max = (number1, number2) => {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}
let numbers = [97, 1, 50, 90, 100, -5, -20 ,9, 0]
let maxNumber = -10000;
for (number of numbers) {
  // console.log('[before max]maxNumber=', maxNumber, 'vs number=', number);
  maxNumber = max(maxNumber, number);
  // console.log('[after max]maxNumber=', maxNumber)
}
console.log(maxNumber);