const express = require('express')
const socket = require('socket.io')


const app = express()

const port = 3001

const server =  app.listen(port , () => {
    console.log('listening on port', port)
})

io = socket(server)

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('send_message', function(data){
        io.emit('receive_message', data)
    })

})



