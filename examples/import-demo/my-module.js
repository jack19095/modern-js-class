let max = (number1, number2) => {
  if (number1 > number2) {
    return number1
  } else {
    return number2
  }
}
const MAX_NUMBER = 2147483647

module.exports = { max, MAX_NUMBER }