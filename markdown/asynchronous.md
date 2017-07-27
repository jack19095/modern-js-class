## 異步函式
#### 程式不再是一行一行執行了

```javascript
const request = require('request');
console.log(1)
request('http://www.google.com', 
    function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response.statusCode);
  console.log(2)
})
console.log(3)
```

---

#### 當你需要呼叫兩個異步函式的時候

```javascript
let imageUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Taipei'

let placeAPI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE'

request(addressUrl, function (error, response, body) {
  console.log(body)
})

request(placeAPI, function (error, response, body) {
  console.log(body)
})

```

---

#### 當你需要呼叫兩個異步函式的時候
#### 可以巢狀的方式使用 callback 

```javascript
let imageUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Taipei'

let placeAPI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE'

request(addressUrl, function (error, response, body) {
  console.log(body)
  request(placeAPI, function (error, response, body) {
    console.log(body)
  })
})

```