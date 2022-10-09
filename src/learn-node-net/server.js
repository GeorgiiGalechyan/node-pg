'use strict'

import net from 'net'

const options = {
  host: '127.0.0.1',
  port: 2000,
}

let sockets = []

server.on('connection', (socket) => {
  const address = socket.address()
  console.log(address.address)
  console.log(socket.remoteAddress)
  //console.log(`К порту: ${socket.address}:${socket.port} подклчился клиент!`)
  //sockets.push(socket) // добавляем клиентский сокет в массив sockets
  /* socket.on('data', (data) => {
    console.log('Клиент передал что-то на сокет:' + socket.remoteAddress + ':' + socket.remoteAddress)
    console.log(JSON.stringify(data))
    sockets.forEach((socket, index, array) => {
      socket.write(socket.remoteAddress + ':' + socket.remotePort + 'сказал' + data + '\n')
    })
  })*/
})

const server = net.createServer((socket) => {})
server.listen(options, (socket) => {
  console.log(`Server listening on ${options.host}:${options.port}`)
})
