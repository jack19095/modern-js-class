## 變數與四則運算
#### 變數是個容器，可以裝水、裝茶、裝筆，也可以不裝東西
#### 在 JS 中沒有型別問題，變數可以裝任何東西

```javascript
let cup1 = 'water'    // 字串
let cup2 = 101        // 數字
let cup3 = null       // 空
```

---


#### `=` 符號，是指派的意思，把右邊的值指給左邊
#### `==` 或 `===` 符號，才是等於的意思（以後會看到）

```javascript
let cup1 = 'water'    // 字串
let cup2 = 101        // 數字
let cup3 = null       // 空
let cup4 = [1, 2, 3]       // 陣列
let cup5 = { name: 'Tom' } // 物件
```

---


#### 把變數印出來

```javascript
let var1 = 'water'
let var2 = [1, 2, 3]
let var3 = { name: 'Tom' }

console.log(var1)
console.log(var2)
console.log(var3)
```

---


#### 變數可以做四則運算
#### 變數可以重新給值

```javascript
let num1 = 5
let num2 = 10
num1 = num2 * 2
num2 = num1 * num1
console.log(num1, num2) 
// 也可以一起印，順便猜猜這兩個值是多少？
```

---


#### 小測驗，要如何交換兩個變數內的值？

```javascript
let lastName = '冠宏'
let firstName = '郭'

// ...

console.log(lastName, firstName)
```

---


#### 參考解答1

```javascript
let lastName = '冠宏'
let firstName = '郭'

console.log(lastName, firstName)

let tmp = lastName
lastName = firstName
firstName = tmp

console.log(lastName, firstName)

```

---


#### 參考解答2

```javascript
let lastName = '冠宏'
let firstName = '郭'

console.log(lastName, firstName)

[firstName, lastName] = [lastName, firstName]

console.log(lastName, firstName)
```
##### 參考連結
 * [Destructuring assignment
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 * [ASI issue](https://github.com/nodejs/node/issues/14145)


---

#### 小測驗2，你如果只能使用一個變數，要怎麼印出 2^32
#### （註：不能使用超過 30 行）

```javascript
let num = 2

// ...

console.log(num)
```


---

#### 參考解答

```javascript
let num = 2; // 2^1
num = num * num // 2^2
num = num * num // 2^4
num = num * num // 2^8
num = num * num // 2^16
num = num * num // 2^32
console.log(num);
```
#### 參考連結
 * [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)