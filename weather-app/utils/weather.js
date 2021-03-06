const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=c3f1fdca1a7932d19c2c52df468e56a1&query='+ latitude +''+ ',' +''+ longitude +''

    request({ url: url, json:true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        }else if (body.error) {
            callback('Unable to find location! ', undefined)
        }else{
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const city = body.location.name
            const country = body.location.country
            const weather = body.current.weather_descriptions[0]
            const Messege = city + ', ' + country + " "+ weather +" It is currently " + temperature + " degress out. "  + "It feels like " + feelslike + " degress out."
            
            callback(undefined, Messege)
        }
    })
}

module.exports = forecast;