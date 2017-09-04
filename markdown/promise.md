## 使用 Promise 
#### 使用 Promise 可以把巢狀的 callback 消掉

```javascript
const request = require('request');

let promise = new Promise((resolve, reject) => {
  let url = 'http://google.com'
  request(url, function (error, response, body) {
    if (error) {
      reject(error);
    } else {
      resolve(body)
    }
  })
})
```
```javascript
promise.then(function (result) {

}, function (error) {

})
```

---

#### 實作情境 2.
#### 想要讓兩個 request 有前後順序
```javascript
let addressPromise = new Promise((resolve, reject) => {
  request(addressUrl, function (error, response, body) {
    if (error) {
      reject(error);
    } else {
      resolve('address done')
    }
  })
})
```
```javascript
let placePromise = new Promise((resolve, reject) => {
  request(placeAPI, function (error, response, body) {
    if (error) {
      reject(error)
    } else {
      resolve('place done')
    }
  })
})
```

---

```javascript
addressPromise
  .then((result) => {
    console.log(result);
    return placePromise;
  })
  .then((result) => {
    console.log(result)
  })
```

---

#### 實作情境 3.
#### 想要讓兩個 request 平行執行，完成後返回
```javascript
Promise
  .all([addressPromise, placePromise])
  .then((result) => {
    console.log(result)
  })
```
