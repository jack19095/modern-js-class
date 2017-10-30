const request = require('request');
const getInfo = require('./getInfo')

let promise = new Promise((resolve, reject) => {
    let address = encodeURI('國父紀念館')
    let addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
    request(addressUrl, function (error, response, body) {
        try {
            let result = getInfo(JSON.parse(body))
            resolve(result)
        } catch (error) {
            resolve({ error: true })
        }
    })
})

promise
    .then((result) => {
        console.log(result)
    })