## 使用 Promise 
#### 使用 Promise 可以把巢狀的 callback消掉

```javascript
const promise = new Promise(function (resolve, reject) {
  if (ok) {
    resolve(value)
  } else {
    reject(error)
  }
})

promise.then(function (value) {

}, function (error) {

})
```

---

#### 內建 setTimeout 函式
#### 他就是個異步函式，等等拿這個當範例
```javascript
const hello = () => {
  console.log('hello');
}

setTimeout(hello, 2000)
// 會在兩秒後才會印出 hello
```

```javascript
const hello2 = (done) =>{
  setTimeout(() => {
    done('hello2')
  }, 2000)
}

hello2((result) => {
  console.log(result)
})
// 會在兩秒後才會執行 hello2
```


---

#### 現在有很多很惱人異步函式

```javascript
const get2 = (number, done) =>{
  setTimeout(() => {
    done(number * number)
  }, 2000)
}

const get5 = (number, done) =>{
  setTimeout(() => {
    done(number * number * number * number * number)
  }, 5000)
}
```

```javascript
const get7 = (number, done) =>{
  setTimeout(() => {
    done(number * number * 0.7)
  }, 7000)
}
```

---

#### 依序取得數字使用巢狀的 callback
```javascript

let number = 5;
get2(number, (result1) => {
  get5(result1, (result2) => {
    get7(result2, (result3) => {
      console.log(number3)
    })
  })
})

```

---

#### 依序取得數字使用 promise
```javascript
let number = 5;
get2(number)
  .then((result)=>{
    return get5(result)
  })
  .then((result)=>{
    return get7(result)
  })
  .then((result)=>{
    console.log(result)
  })
```
