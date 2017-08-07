const express = require('express')
const request = require('request')
const { getInfo } = require('./ex-object')

const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

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

app.get('/search-place', function (req, res) {
  let place = req.query.place;

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}`
  request(url,
    function (error, response, body) {
      let result = getInfo(JSON.parse(body))
      res.send(result);
    });
});
// http://localhost:3000/search-place?place=ntu

app.get('/search-nearby', function (req, res) {
  let lat = req.query.lat
  let lng = req.query.lng
  let placeAPI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

  request({
    url: placeAPI,
    qs: {
      location: `${lat},${lng}`,
      radius: '500',
      type: 'restaurant',
      key: 'AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE'
    },
  },
    function (error, response, body) {
      res.send(body)
    })
})
// http://localhost:3000/search-nearby?lat=25.0339639&lng=121.5644722

app.get('/home', function (req, res) {
  let top = req.query.top;
  res.render('home', {
    top: top,
    title: 'Cover your page.',
    subTitle: 'Cover is a one-page template' +
      'for building simple and beautiful ' +
      'home pages.'
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// http://localhost:3000/