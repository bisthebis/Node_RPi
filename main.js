var http = require('http')

var server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('Hello from Raspberry Pi (NodeJS)')
})

server.listen(80)
