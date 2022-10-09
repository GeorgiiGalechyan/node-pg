'use strict'

import { Socket } from 'dgram'
import net from 'net'

const options = {
  host: '0.0.0.0',
  port: 2000,
}

// Если вывести в консоль массив openSockets после добавления в него сокетов, то мы увидим массив сокетов. Сокет выглядит как объект большого размера с кучей полей.
const openSockets = []

const onData = (data) => {
  console.log(`С сервера пришло сообщение: ` + data)
}

// Экземпляр сервера создастся ДЛЯ КАЖДОГО НОВОГО СОЕДИНЕНИЯ при подключении клиента к серверу.
const server = net.createServer((socket) => {
  openSockets.push(socket)
  socket.write('Привет от Сервера!)')
  socket.on('data', onData)
  socket.on('error', (err) => {
    console.error('Socket error', err)
  })

  socket.on('end', (socket) => {
    // Удаляем отключившийся сокет из массива openSockets
    openSockets = openSockets.filter((s) => {
      return s !== socket
    })
    console.log('Client disconnected!')
    console.log(openSockets)
  })
})

server.on('data', onData)

// Обрабатываем событие 'connection' - подключение пользователя к сокету
server.on('connection', (socket) => {
  const address = socket.address()
  console.log(
    `К сокету ${address.address}:${address.port} подключился новый пользователь по адресу ${socket.remoteAddress}:${socket.remotePort}`
  )
})

// Вариант реализации события 'data', если нам нужно отправить сообщение всем клиентам, подключенны к сокету. Можно применить при создании элементарного чата.
/*server.on('data', function (data) {
  openSockets.forEach((socket) => {
    socket.write(data.toString())
  })
})*/

// Обрабатываем событие 'end' - отключение пользователя от сокета


// Обрабатываем ошибки... но что-то идет не так
server.on('error', (err) => {
  console.error('Server error', err)
})

server.listen(options, () => {
  console.log(`Server listening on ${options.host}:${options.port}`)
})
