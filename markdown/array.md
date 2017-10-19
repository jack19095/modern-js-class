## 陣列
#### 可以想像成是一個列表，裡面有很多個變數
#### 裡頭裝的元素也可以是不同型別，索引從零開始

```javascript
let scores = [50, 80, 40] // 陣列的初始化
console.log(scores)       // 把整個陣列印出來

let score0 = scores[0]    // 把第 0 項取出來

console.log(score0)
console.log(scores[0])
```

---


#### 陣列除了直接賦予值，也可以放變數進去

```javascript
let score0 = 50
let score1 = 80
let score2 = 40
let scores = [score0, score1, score2]

console.log(scores)      // 把整個陣列印出來
console.log(scores[0])   // 只印出第 0 個

```

---

#### 陣列有一些屬性，與方法（method）可以使用
**.length / .push()**

```javascript
let sports = ['soccer', 'baseball']
console.log(sports.length) 
// 2

let total = sports.push('football', 'swimming')

console.log(sports) 
// ['soccer', 'baseball', 'football', 'swimming']

console.log(total)  
// 4
```

---


**.slice()**

```javascript
let sports = ['soccer', 'baseball', 'football', 'swimming']
let sliced = sports.slice(1, 3)

console.log(sports)  
// ['soccer', 'baseball', 'football', 'swimming']

console.log(sliced)  
// ['baseball', 'football']
```


---


**.shift()** / **.pop()**

```javascript
let sports = ['soccer', 'baseball', 'football', 'swimming']

sports.pop()
console.log(sports)  // ['soccer', 'baseball', 'football']

sports.shift()
console.log(sports)  // ['baseball', 'football']
```


---


#### 還有很多方法（method）可以使用
#### 可以到這裡查詢 [Reference Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


---


#### 小測驗時間

```javascript
let sports1 = ['volleyball', 'baseball', 
  'football', 'basketball']

let sports2 = ['swimming', 'archery', 
  'cycling']

let sportSet = [sports1, sports2]

console.log(sportSet)
console.log(sportSet[0])
console.log(sportSet[0][2])
console.log(sportSet[3][2]) // 會發生錯誤
```

