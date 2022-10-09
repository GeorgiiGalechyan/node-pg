'use strict'

import net from 'net'

const options = {
  host: '127.0.0.1',
  port: 2000,
}

const options2 = {
  host: '127.0.0.1',
  port: 3000,
}

const client = new net.Socket()
client.connect(options, () => {
  console.log(`Client connected from Server on `)
  client.write('Hello, server! Love, Client.')
})

const client2 = new net.Socket()
client2.connect(options2, () => {
  console.log(`Client connected from Server2 on `)
  client.write('Hello, server2! Love, Client.')
})

/*client.connect(options2, () => {
  console.log(`Client connected from Server3 on `)
  client.write('Hello, server3! Love, Client.')
})*/

/*
client.on('data', data => {
  console.log('Получена' + data)
  client.destroy(); // убивает слиета после ответа сервера
})

client.on('close', ()=> {
  console.log('Соединение закрыто')
})*/
