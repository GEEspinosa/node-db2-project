const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())
server.use('/api/cars', carsRouter)

server.get('*', (req, res) => {//eslint-disable-line
    res.send('Hello, World!')
})

module.exports = server
