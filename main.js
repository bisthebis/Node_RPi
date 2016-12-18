const http = require('http')
const exec = require('child_process').execSync
const express = require('express')

const HTTP_PORT = 8080

var app = express()

app.get('/', (req, res) => {
  var content = exec('ls -al')
  res.render('index.ejs', {contenu: content})
}
)

app.listen(HTTP_PORT)
