## [NPM](https://www.npmjs.com/)
#### 用來安裝 Nodejs 套件的工具，隨著 Nodejs 安裝
#### 以下為安裝 request 套件

```bash
$ npm install request
```
 
#### 安裝完後執行目錄的資料夾，會多一個 node_modules 資料夾
```bash
$ ls 
node_modules/
```

---

## 使用 Request

```javascript
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

