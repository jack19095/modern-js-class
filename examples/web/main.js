const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/hello', function (req, res) {
  res.send('hello routing')
})
app.post('/hi', function (req, res) {
  let query = req.query
  let body = req.body
  res.send('hi routing from post. query=' +
    JSON.stringify(query) +
    JSON.stringify(body));
})

app.get('/prod/:id', function (req, res) {
  let query = req.query
  let id = req.params.id;
  res.send('prod routing from get.' + 
    `query = ${JSON.stringify(query)}` + 
    `id = ${id}`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// http://localhost:3000/