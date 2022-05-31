const fs = require('fs')

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', book)*/

/*const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)*/

const jsonData =  fs.readFileSync('1-json.json')
const parseData = JSON.parse(jsonData)
console.log(parseData.toString)

parseData.name = "Eugene"
parseData.age = 24
const myData = parseData

console.log(myData)
