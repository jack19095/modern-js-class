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
  },
  json: true,
}, function (error, response, body){
    console.log('2:', body.welcomeMessage)
    console.log('2:', body.query)    
})

request({
  url: 'http://localhost:3000/hi',
  method: 'POST',
  qs: {
    address: 'Taipei',
    type: 'food'
  },
  json: true,
}, 
  function (error, response, body){
    console.log('3:', body)
})

request({
  url: 'http://localhost:3000/hi',
  method: 'POST',
  body: {
    username: 'ggm',
    email: 'teacher@ggm.tw'
  },
  json: true,
}, 
  function (error, response, body){
    console.log('4:', body)
})