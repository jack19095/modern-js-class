const rp = require("request-promise")
const getInfo = require("./getInfo")

const KEY = 'AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE'

const searchRestaurant = async address => {
  address = encodeURI(address)
  let addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${KEY}`

  let addressBody = await rp(addressUrl)
  let { lat, lng } = getInfo(JSON.parse(addressBody))
  let location = `${lat},${lng}`
  let placeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=500&type=restaurant&key=${KEY}`

  let placeBody = await rp(placeUrl)
  placeBody = JSON.parse(placeBody)
  let places = placeBody.results.map(element => {
    return {
      name: element.name,
      rating: element.rating
    }
  })
  return places
}

const main = async (addressList) => {
  let tasks = []
  let places = []
  for (let address of addressList) {
    tasks.push(searchRestaurant(address))
  }
  let results = await Promise.all(tasks)
  for (let result of results) {
    places = places.concat(result)
  }
  return places
}

let addressList = [
  '台灣大學', '國父紀念館', '台北101', '台北市政府',
  '師範大學', '松山高中', '忠孝復興捷運站'
]

let start = Date.now()

main(addressList)
  .then((places) => {
    console.log(places, Date.now() - start)
  })
