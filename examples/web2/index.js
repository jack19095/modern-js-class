const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  let query = req.query
  res.send(`hello routing, query = ${JSON.stringify(query)}`)
})
// http://localhost:3000/hello?address=Taipei&type=food

app.post('/hi', function (req, res) {
  let query = req.query
  let body = req.body
  res.send(`hi routing, query = ${JSON.stringify(query)}, body = ${JSON.stringify(body)}`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})