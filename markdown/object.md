## 物件 / Object / JSON
#### JavaScript Object Notation
#### 在 JS 中，除了基本型態以外都是 object

```javascript
let people = {
  name: '王小明',
  age: 19
}

console.log(people)
console.log(people.name)
console.log(people['age'])

```

---


#### 物件裡面可以有物件

```javascript
let people = {
  name: '王小明',
  age: 19
}

let friend = {
  name: '王小華',
  age: 18
}

people['friend'] = friend
console.log(people)
```

---


#### 物件裡面可以有陣列
#### 註：陣列裡面也可以有物件

```javascript
let people = {
  name: '王小明',
  age: 19,
  friend: {
    name: '王小華',
    age: 18
  }
}

let pets = [ {type:'cat', name: '哈嚕'}, {type:'dog', name:'柴柴' }]
people.pets = pets
console.log(people)
```

---


#### 變數可以做四則運算
#### 變數可以重新給值

```javascript
let number1 = 5;
let number2 = 10;
number1 = number2 * 2;
number2 = number1 * number1;
console.log(number1, number2); 
// 也可以一起印，順便猜猜這兩個值是多少？
```

---


#### 小測驗，要如何交換兩個變數內的值？

```javascript
let lastName = '冠宏';
let firstName = '郭';

// ...

console.log(lastName, firstName);
```

---

#### 小測驗，你如果只能使用一個變數，要怎麼印出 2^32
#### （註：不能使用超過 30 行）

```javascript
let number = 2;

// ...

console.log(number);
```
