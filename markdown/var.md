## 變數與四則運算
#### 變數是個容器，可以裝水、裝茶、裝筆，也可以不裝東西
#### 在 JS 中沒有型別問題，變數可以裝任何東西

```javascript
let cup1 = 'water';
let cup2 = 101;
let cup3 = null;
```

---


#### `=` 符號，是指派的意思，把右邊的值指給左邊
#### `==` 或 `===` 符號，才是等於的意思（以後會看到）

```javascript
let var1 = 'water'; //字串
let var2 = [1, 2, 3]; //陣列
let var3 = { name: 'tome' }; //物件
```

---


#### 把變數印出來

```javascript
let var1 = 'water';
let var2 = [1, 2, 3];
let var3 = { name: 'tome' };

console.log(var1);
console.log(var2);
console.log(var3);
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

#### 小測驗，你如果只能使用一個變數，要怎麼印出 2^64
#### （註：不能使用超過 60 行）

```javascript
let number = 2;

// ...

console.log(number);
```
