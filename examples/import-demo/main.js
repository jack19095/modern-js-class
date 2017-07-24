let obj = require('./my-module')
console.log(obj)
console.log(obj.max(5, 10))
console.log(obj.MAX_NUMBER)
let { max, MAX_NUMBER } = obj
console.log(max(5, 10))
console.log(MAX_NUMBER)
