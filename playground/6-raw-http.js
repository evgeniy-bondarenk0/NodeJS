 const http = require('http')

 const url = 'http://api.weatherstack.com/current?access_key=c3f1fdca1a7932d19c2c52df468e56a1&query=Lviv'
 let data = ''

 const request = http.request(url, (response) => {
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    
    response.on('end', () => {
        const body = JSON.parse(data)
        
        console.log(body)
    })
 })
 request.on('error', (error) => {
    console.log('An error', error)
 })

 request.end()