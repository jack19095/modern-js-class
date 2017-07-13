## [For 迴圈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
#### 某些要重複做的事情，常與陣列一起使用
#### 檢查、加總陣列。

```javascript
for ( /* 初始化指令 */ ; /* 判斷式 */; /* 每次程式結束後指令 */) {
   // 執行的程式碼
}
```

```javascript
for (let i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```

---

#### 執行順序

```javascript
for ( /* 初始化指令 */ ; /* 判斷式 */; /* 每次程式結束後指令 */) {
   // 執行的程式碼
}
```
```
0. [初始化指令]
1. [判斷式]
2. [執行的程式碼]
3. [每次程式結束後指令]
4. [判斷式]
5. [執行的程式碼]
6. [每次程式結束後指令]
... 如此生生不息，直到某次判斷式跳出，或使用 break 與 return

```

---


#### [For...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
#### 配合陣列使用

```javascript
for ( 參數 of 陣列) {
   // 執行的程式碼
}
```

```javascript

let sports = ['soccer', 'baseball', 'football', 'swimming'];
for (sport of sports) {
   console.log(sport);
   // more statements
}
```

---


#### 使用 [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) 從迴圈中臨陣脫逃

```javascript
let sports = ['soccer', 'baseball', 'football', 'swimming'];
for (let i = 0 ; i < sports.length; i++) {
  if (sport[i] === 'baseball') {
    break;
  }
}
```

```javascript
let sports = ['soccer', 'baseball', 'football', 'swimming'];
for (sport of sports) {
  if (sport === 'baseball') {
    break;
  }
}
```

--- 
#### 小測驗時間
#### 找出 numbers 裡面最大及最小的數字
```javascript

let numbers = [97, 1, 50, 90, 100, -5, -20 ,9];

for (number of numbers) {
  // ...
}


```
--- 