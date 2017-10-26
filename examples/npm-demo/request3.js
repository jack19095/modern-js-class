const request = require('request')
const getInfo = require('./getInfo')

let address = encodeURI('國父紀念館')
let addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`

request(addressUrl, function (error, response, body) {
  let result = getInfo(JSON.parse(body))
  console.log(result)

  let location = `${result.lat},${result.lng}`
  let placeAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE`
  
  request(placeAPI, function (error, response, body) {
    let places = JSON.parse(body).results
    let placesName = places.map( e => e.name)
    console.log(placesName)
  })
})
