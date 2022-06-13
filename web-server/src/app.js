const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

// Define path for express config
const viewPath = path.join(__dirname, '../templates/views')
const publicDir = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname,  '../templates/partials') 
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDir))

// Setup handlerbar engine and views location
app.set('view engine','hbs') // activate handler bar library
app.set('views', viewPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Eugene Bondarenko'    
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        messege: "undefined",
        title: "Help page",
        name: 'Eugene Bondarenko'
        
        
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Eugene Bondarenko'
    })
})

app.get('', (req, res) => {
    res.render('index')
})


app.get('/weather', (req, res) => {
    res.send({
        Weather: {
            Location: "Lviv",
            Temperature: 28
    }})
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        messege: 'Help article not found',
        title: "404",
        name: 'Eugene Bondarenko'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        messege: 'Page not found',
        title: "404",
        name: 'Eugene Bondarenko'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000');
})