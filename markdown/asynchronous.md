## 異步函式
#### 程式不再是一行一行執行囉

```javascript
const request = require('request');
console.log(1)
request('http://www.google.com', 
    function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response.statusCode);
  console.log('body:', body);
})
console.log(2)
```