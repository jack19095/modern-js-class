let peopleStr = '{"name":"王小明","age":19}'
let people = {
  name: '王小明',
  age: 19
}

let peopleStrToObject = JSON.parse(peopleStr)
console.log(peopleStr, peopleStrToObject.name)
let peopleToString = JSON.stringify(people)
console.log(people, peopleToString)

//{name: '王小明', address:'台北市'}

//https://maps.googleapis.com/maps/api/geocode/json?address=台灣大學