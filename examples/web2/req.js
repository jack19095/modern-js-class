const request = require('request')

request('http://localhost:3000/hello', 
  function (error, response, body){
    console.log(body)
})

request({
  url: 'http://localhost:3000/hi',
  method: 'POST'
}, 
  function (error, response, body){
    console.log(body)
})