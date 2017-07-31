const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/hello', function (req, res) {
  res.send('hello routing')
})
app.post('/hi', function (req, res) {
  let query = req.query
  res.send('hi routing from post. query=' +
    JSON.stringify(query))
})
app.get('/hi', function (req, res) {
  let query = req.query
  res.send('hi routing from get. query=' +
    JSON.stringify(query))
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// http://localhost:3000/