## 使用 Expresss Web 框架
#### [Expresss](http://expressjs.com/) 是 Nodejs 裡面最知名的 Web 框架

```bash
$ npm init
$ npm install express --save
```

```javascript
// index.js
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
$ node index.js
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

#### [url的參數](https://nodejs.org/docs/latest/api/url.html#url_url_strings_and_url_objects)


---

### 使用 postman 與自己的 server 互動

* [postman chrome plugin](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-TW)
* [postman desktop app](https://www.getpostman.com/)

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

從 routing 的 req 讀取參數

```javascript
app.post('/hi', function (req, res) {
  res.send(`query=${req.query}`)
})
```

使用 request 傳送參數

```javascript
request({
  url: 'http://localhost:3000/hi',
  method: 'POST',
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

### [使用靜態檔案](http://expressjs.com/en/starter/static-files.html)

```javascript
app.use('/static', express.static('static'))

// or

app.use('/static', express.static(path.resolve(__dirname, 'static')))

```