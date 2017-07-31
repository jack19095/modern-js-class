const request = require('request')
// request({
//   url: 'http://localhost:3000/hello',
//   method: 'GET',
// }, function (error, response, body) {
//   console.log(body)
// })
request({
  url: 'http://localhost:3000/hi',
  method: 'POST',
  qs: { address: 'taipei' },
  body: { detail: '123' },
  json: true,
}, function (error, response, body) {
  console.log(body)
})