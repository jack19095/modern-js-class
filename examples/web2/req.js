const request = require('request')

request('http://localhost:3000/hello?address=Taipei&type=food', 
  function (error, response, body){
    console.log('1:', body)
})

request({
  url: 'http://localhost:3000/hello',
  qs: {
    address: 'Taipei',
    type: 'food'
  }
}, function (error, response, body){
    console.log('2:', body)
})

request({
  url: 'http://localhost:3000/hi',
  method: 'POST'
}, 
  function (error, response, body){
    console.log(body)
})