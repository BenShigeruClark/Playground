const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Ben'
data.age = 47
data.planet = 'Mars'

const personJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', personJSON)

console.log(data.name)
console.log(data.planet)



