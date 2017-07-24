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
// https://developers.google.com/maps/documentation/static-maps/intro

let imageUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=13&size=600x300'

const request = require('request');
request(imageUrl, 
    function (error, response, body) {
})

```

