const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')
const chalk = require('D:/Git/NodeJS/notes-app/node_modules/chalk')

//import request from 'postman-request'

// const url = 'http://api.weatherstack.com/current?access_key=c3f1fdca1a7932d19c2c52df468e56a1&query=LVIV&units=f'
// 
// request({ url: url, json:true }, (error, response) => {
// 
//     if (error){
//         console.log('Unable to connect to weather service')
//     }else if (response.body.error) {
//         console.log('Unable to find location! ')
//     }else{
//         const temperature = response.body.current.temperature
//         const feelslike = response.body.current.feelslike
//         const city = response.body.location.name
//         const country = response.body.location.country
//         const weather = response.body.current.weather_descriptions[0]
//         console.log(city + ', ' + country + " "+ weather +" It is currently " + temperature + " degress out. "  + "It feels like " + feelslike + " degress out.")
//     }
// 
//     })
const adress = process.argv[2]

if (!adress) {
    console.log(chalk.red.inverse('Please provide an adress'))
}else{
    geocode(adress, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
               return console.log(error);
            }
        console.log(location)
        console.log(forecastData)    
       })
    })
}


