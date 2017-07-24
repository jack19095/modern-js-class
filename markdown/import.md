## require / module.exports
#### 使用外部已經寫好的模組，將已經寫好的模組給外部使用

```javascript
let max = (number1, number2) => {
  if (number1 > number2) {
    return number1
  } else {
    return number2
  }
}
const MAX_NUMBER = 2147483647

module.exports = { max, MAX_NUMBER }
```

```javascript
let { max, MAX_NUMBER } = require('./my-module')
console.log(max(5, 10))
console.log(MAX_NUMBER)
```

---

## 實作
#### 將 ex-object.js 的程式碼輸出給外部使用

```javascript
let { getInfo } = require('./ex-object')

```