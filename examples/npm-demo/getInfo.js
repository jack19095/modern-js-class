let getInfo = (data) => {
    let address = data.results[0].formatted_address;
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;
    return {
        lat: lat,
        lng: lng,
        formatted_address: address
    }
}

module.exports = getInfo
