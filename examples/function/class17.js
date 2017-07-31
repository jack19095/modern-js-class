let numbers = [97, 1, 50, 90, 100, -5, -20, 9, 0];
let reversed = [];

numbers.forEach((item) => {
  reversed.unshift(item);
});

console.log(numbers);
console.log(reversed);