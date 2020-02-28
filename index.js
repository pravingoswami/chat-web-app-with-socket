const express = require('express')
const socket = require('socket.io')


const app = express()

const port = 3020

const server =  app.listen(port , () => {
    console.log('listening on port', port)
})

io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)
})