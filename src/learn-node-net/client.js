'use strict'

import { error } from 'console'
import net from 'net'

// Задаём парметры сокетов к которым будем подключаться.
// Если сокет, к которому будем
const options = [
  {
    host: '127.0.0.1',
    port: 2000,
  },
  {
    host: '127.0.0.1',
    port: 3000,
  },
]

const client = new net.Socket()

client.on('data', (data) => {
  console.log(`С сервера пришло сообщение: ` + data)
})

client.connect(options[0], () => {
  const opt = options[0]
  console.log(`Клиент подключился к серверу на сокет: ${opt.host}:${opt.port}`)
  client.write('Привет от клиента!)))))')
})

client.on('close', () => {
  console.log('Соединение закрыто')
})
