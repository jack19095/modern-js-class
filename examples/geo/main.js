let { getInfo } = require('./ex-object')
const request = require('request');

let address = encodeURI('台灣大學')
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`

request(url, function (error, response, body) {
  let obj = JSON.parse(body);
  console.log('getInfo:', getInfo(obj));
});
