const http = require('http')
const exec = require('child_process').execSync
const express = require('express')

const HTTP_PORT = 8080

var app = express()

app.get('/', (req, res) => {
  var status = exec('/home/pi/Programmation/GPIO/ledSTATUS.sh').toString();
  if (status[0] == '1') {
    status = 'Led is ON'
  } else {
    status = 'Led is OFF'
  }
  var lines = [
    status
  ]
  res.render('index.ejs', {contenu: lines})
}
)

app.get('/up', (req, res) => {
  exec('python /home/pi/Programmation/GPIO/ledUP.py')
  res.redirect('/')
}
)

app.get('/down', (req, res) => {
  exec('python /home/pi/Programmation/GPIO/ledDOWN.py')
  res.redirect('/')
}
)

app.listen(HTTP_PORT)
