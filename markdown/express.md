## 使用 Expresss Web 框架
#### [Expresss](http://expressjs.com/) 是 Nodejs 裡面最知名的 Web 框架

```bash
$ npm init
$ npm install express --save
```

```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

```bash
$ node main.js
```
```
啟動後開啟瀏覽器，拜訪 http://localhost:3000
```

---

#### 新增 routing
```javascript
app.get('/hello', function (req, res) {
  res.send('hello routing')
})

app.post('/hi', function (req, res) {
  res.send('hi routing')
})
```

---

### 使用 postman 與自己的 server 互動

* [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-TW)

---

#### 使用 request 與自己的 Server 互動

```javascript
const request = require('request')
request('http://localhost:3000/hello', 
  function (error, response, body){
    console.log(body)
})
```

```javascript
request({
  url: 'http://localhost:3000/hi',
  method: 'POST'
}, 
  function (error, response, body){
    console.log(body)
})
```

---

#### [url的參數](https://nodejs.org/docs/latest/api/url.html#url_url_strings_and_url_objects)


---

從 routing 的 req 讀取參數

```javascript
app.post('/hi', function (req, res) {
  res.send(`query=${req.query} body=${req.body}`)
})
```

使用 request 傳送參數

```javascript
request({
  url: 'http://localhost:3000/hi',
  method: 'POST'
  qs: { address: 'Taipei' },
}, 
  function (error, response, body){
    console.log(body)
})
```

---

#### 新增 body-parser

```javascript
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

---

#### 將 Express 加入我們的 [geo](https://github.com/ntu-csie-train/modern-js-class/tree/master/examples/geo) 專案

```
將工作目錄切到 geo 專案，執行這個指令：

$ npm install express --save
```

```
註：如果你是直接複製我的程式碼，要先執行這個指令：

$ npm install

它會根據 package.json 的敘述，安裝缺少的套件。若延用工作目錄則不用。
```

---

將 express 的程式碼加進 `main.js`，直接加在檔案最下面

```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```
```
$ node main.js
```

---

#### 整理程式碼
```
從現在起要把輸出印在網頁上，幫動作放到對應的 handler 函式
```