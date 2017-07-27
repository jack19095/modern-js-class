let { getInfo } = require('./ex-object')
const request = require('request');

let address = encodeURI('台灣大學')
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`


request(url, function (error, response, body) {
  let obj = JSON.parse(body);
  let info = getInfo(obj);
  console.log('getInfo:', info);
  let lat = info.lat;
  let lng = info.lng;
  let placeAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE`

  request(placeAPI, 
    function (error, response, body) {
      console.log(body);
  })
});
