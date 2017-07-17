// 找出 NUMBERS 有幾個負數，幾個正數
let numbers = [97, 1, 50, 90, 100, -5, -20, 9, 0];

let positive = [];
let negative = [];
for (number of numbers) {
  if (number >= 0) {
    positive.push(number);
  } else {
    negative.push(number);
  }
}
console.log(positive, negative)
console.log(positive.length, negative.length) // 7, 2