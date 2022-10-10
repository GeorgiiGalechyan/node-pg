'use strict'

import net from 'net'

const usersSockets = []
const options = { host: '0.0.0.0', port: 2002 }

const chatServer = net.createServer()

const connection = (socket) => {}

server2.listen(options, (socket) => {
  console.log(`Server2 listening on ${optionsServer.host}:${optionsServer.port}`)
})

server2.on('connection', (socket) => {
  const address = socket.address()
  console.log(address.address)
  console.log(socket.remoteAddress)
})
