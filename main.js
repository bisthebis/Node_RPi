const http = require('http')
const exec = require('child_process').execSync
const express = require('express')

const HTTP_PORT = 8080

var app = express()

app.get('/', (req, res) => {
  var lines = exec('ls -al').toString().split('\n')
  res.render('index.ejs', {contenu: lines})
}
)

app.listen(HTTP_PORT)
