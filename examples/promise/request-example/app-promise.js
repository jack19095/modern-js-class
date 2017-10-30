const request = require("request")
const getInfo = require("./getInfo")

const main = address => {

  let getAddressPromise = (address) => {
    address = encodeURI(address)
    let addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
    let addressPromise = new Promise((resolve, reject) => {
      request(addressUrl, function (error, response, body) {
        let { lat, lng } = getInfo(JSON.parse(body))
        let location = `${lat},${lng}`
        resolve(location)
      })
    })
    return addressPromise
  }

  let getPlacePromise = (location) => {
    let placePromise = new Promise((resolve, reject) => {
      let placeAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE`
      request(placeAPI, function (error, response, body) {
        body = JSON.parse(body)
        let places = body.results.map(element => {
          return {
            name: element.name,
            rating: element.rating
          }
        })
        resolve(places)
      })
    })
    return placePromise
  }

  getAddressPromise(address)
    .then((location) => {
      return getPlacePromise(location)
    })
    .then((places) => {
      console.log(places)
    })
}

main("台灣大學")
