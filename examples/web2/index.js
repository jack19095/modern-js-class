const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  let query = req.query
  res.send(`hello routing, query = ${JSON.stringify(query)}`)
})
// http://localhost:3000/hello?address=Taipei&type=food

app.post('/hi', function (req, res) {
  res.send('hi routing')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})