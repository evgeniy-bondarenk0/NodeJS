const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=c3f1fdca1a7932d19c2c52df468e56a1&query=Lviv'

request({url: url, json: true}, (error, response) => {
      console.log(response.body.current.weather_descriptions[0])
      })