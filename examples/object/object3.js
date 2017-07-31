let people = {
  name: '王小明',
  age: 19,
  friend: {
    name: '王小華',
    age: 18
  }
}
let pets = [
  { type: 'cat', name: '哈嚕' },
  { type: 'dog', name: '柴柴' }
]

people.pets = pets
console.log(people)