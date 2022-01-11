const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibGFyaXNzYWJpYW5jaGkiLCJhIjoiY2tyZTNieXRoNGVjMDJzcnhoaW44enE5ZyJ9._uuTjrp6AXueJSiAXfS97A&limit=1'

    request({url, json : true},(error, {body}) => {
        if (error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location! Try another search.', undefined)
        } else {
            callback(undefined,{
                location: body.features[0].place_name,
                longitude: body.features[0].center[0],   
                latitude: body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode