'use strict'

import net from 'net'

const optionsServer = {
  host: '127.0.0.1',
  port: 3000,
}

const optionConnection = {
  host: '127.0.0.1',
  port: 2000,
  readableAll: true,
}

const server2 = net.createServer(() => {})

server2.listen(optionsServer, (socket) => {
  console.log(`Server2 listening on ${optionsServer.host}:${optionsServer.port}`)
})

server2.on('connection', (socket) => {
  const address = socket.address()
  console.log(address.address)
  console.log(socket.remoteAddress)
})
