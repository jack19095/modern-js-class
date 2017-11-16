## Database
### 在 Nodejs 使用 mongodb

 * 使用 mongo 的服務 [mongoLab](https://elements.heroku.com/addons/mongolab)
 * 查看文件 [mongodb](https://mongodb.github.io/node-mongodb-native/)
 * 安裝 mongodb 套件
```bash
npm install mongodb --save
```

---

### 連線
```javascript
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://<user>:<password>@localhost:27017/exampleDb", 
  function(err, db) {
    if (err) {
      return console.dir(err); 
    }
});
```

---

### 建立資料
```javascript
let collection = db.collection('test');
let doc1 = {'hello':'doc1'};
let doc2 = {'hello':'doc2'};
let lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

collection.insert(doc1);
collection.insert(doc2, {w:1}, function(err, result) {});
collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
```

---

### 取得資料使用 cursor
```javascript
let collection = db.collection('test');
```
```javascript
let cursor = collection.find({}); 
cursor.nextObject((err, item) => {
  console.log(item)
})
```
```javascript
collection.find({}, (err, cursor) => {
  cursor.nextObject((err, item) => {
    console.log(item)
  })
})
```

---

### 取得資料，轉成 Array
```javascript
let collection = db.collection('test');

collection.find({}).toArray((err, results) => {
  console.log(results)
});

```