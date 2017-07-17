let numbers = [97, 1, 50, 90, 100, -5, -20, 9, 0];
for (let i = 0; i < numbers.length / 2; i++) {
  let tmp = numbers[i];
  numbers[i] = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = tmp;
}
console.log(numbers);