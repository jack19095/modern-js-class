## [NPM](https://www.npmjs.com/)
#### 用來安裝 Nodejs 套件的工具，隨著 Nodejs 安裝
#### 以下為安裝 request 套件

```bash
$ npm init
$ npm install request --save
```

 * `npm init` 會初始化專案資料夾，並產生 package.json
 * `npm install` 會安裝套件，並產生 node_modules 資料夾，及更新 package.json 檔案
```bash
$ ls 
node_modules/
```

---

#### 使用 Request

```javascript
const request = require('request');
request('http://www.google.com', 
    function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response.statusCode);
  console.log('body:', body);
});
```

---

#### 透過 Request 使用 Geocoding API

```javascript
const request = require('request');
let address = 'National Taiwan University'
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
request(url, 
    function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response.statusCode);
  console.log('body:', body);
});
```

---

#### 結合 getInfo()

```javascript
const request = require('request');
const { getInfo } = require('./ex-object')

let address = 'National Taiwan University'
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
request(url, function (error, response, body) {
  console.log(getInfo(body));
});
```
