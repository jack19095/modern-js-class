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


#### 符合 JSON 格式的字串
#### 與
#### JSON 表示法產稱的物件

```javascript
let peopleStr = '{"name":"王小明","age":19}'
let people = {
  name: '王小明',
  age: 19
}
console.log(peopleStr)
console.log(people)
```

---

#### 字串轉成 JSON 物件

```javascript
let peopleStr = '{"name":"王小明","age":19}'
let people = JSON.parse(peopleStr)
console.log(people)
```

---

#### JSON 物件轉成字串

```javascript
let people = {
  name: '王小明',
  age: 19
}
let peopleStr = JSON.stringify(people)
console.log(peopleStr)
```

---

#### 小測驗1.
#### 下載這個[程式碼](../exercises/ex-object.js)
```javascript
let data = { /* ... */ }

let getInfo = () =>{

}

console.log(getInfo(data))

/*
請處理 data 取出 lat, lng, formatted_address 等資料，輸出格式如下：｀
{ lat: 37.4224764,
  lng: -122.0842499,
  formatted_address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA' }
*/
```
