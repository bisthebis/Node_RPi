const http = require('http')
const exec = require('child_process').execSync

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  var content = exec('ls -al')
  res.write(content + '\n\n')
  res.end('Hello from Raspberry Pi (NodeJS)')
})

server.listen(80)
