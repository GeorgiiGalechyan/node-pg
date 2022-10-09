'use strict'

  /*Возможные варианты вызова server.listen:
   *  server.listen(handle[, backlog][, callback]) 
   *  server.listen(options[, callback])
   *  server.listen(path[, backlog][, callback]) for IPC servers
   *  server.listen([port[, host[, backlog]]][, callback]) for TCP servers */



// Default настройки сервера согласно документации node.js
export const TCPServerOptions = {
  allowHalfOpen: false,
  pauseOnConnect: false,
  noDelay: false,
  keepAlive: false,
  keepAliveInitialDelay: 0,
}

// Конфиг соединения
export const ServerListenOptions = {
  port: '',
  host: '',
  path: '',
  backlog: '',
  exclusive: '',
  readableAll: '',
  ipv6Only: '',
  signal: '',
  backlog: undefined,

}

