let numbers = [97, 1, 50, 90, 100, -5, -20 ,9, 0];
let numbersR = [];
let numbersR2 = [];
let numbersR3 = [];

for (number of numbers) {
  numbersR.unshift(number);
}
for (let i = 0 ; i < numbers.length; i++) {
  numbersR2[i] = numbers[numbers.length - 1 - i];
}
for (let i = 0 ; i < numbers.length; i++) {
  numbersR3.push(numbers[numbers.length - 1 - i]);
}

console.log(numbersR2);