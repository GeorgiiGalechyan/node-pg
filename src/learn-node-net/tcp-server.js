'use strict'

import net from 'net'

const options = {
  host: '0.0.0.0',
  port: 2000,
}

// Будем сохранять ктивные клиентские сокеты в массив и удалять неактивные.
const clients = []

const connection = (socket) => {
  clients.push(socket)
  socket.write('Привет от Сервера!)')
  socket.on('data', onData)
  socket.on('error', (err) => {
    console.error('Socket error', err)
  })
}

const onData = (data) => {
  console.log(`С сервера пришло сообщение: ` + data)
}

// Экземпляр сервера создастся ДЛЯ КАЖДОГО НОВОГО СОЕДИНЕНИЯ при подключении клиента к серверу.
const server = net.createServer((socket) => {})

server.on('data', onData)

// Обрабатываем событие 'connection' - подключение пользователя к сокету
server.on('connection', (socket) => {
  const address = socket.address()
  console.log(
    `К сокету ${address.address}:${address.port} подключился новый пользователь по адресу ${socket.remoteAddress}:${socket.remotePort}`
  )
})

// Обрабатываем событие 'end' - отключение пользователя от сокета
socket.on('end', (socket) => {
  // Удаляем отключившийся сокет из массива openSockets
  clients = clients.filter((s) => {
    return s !== socket
  })
  console.log('Client disconnected!')
  console.log(openSockets)
})

// Обрабатываем ошибки... Событие  error
server.on('error', (err) => {
  console.error('Server error', err)
})

// Запускается после полного закрытия сокета.
// Запускается автоматически после события 'error'.
server.on('close', () => {})

server.listen(options, () => {
  console.log(`Server listening on ${options.host}:${options.port}`)
})
