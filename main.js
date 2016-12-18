const http = require('http')
const exec = require('child_process').execSync
const express = require('express')

const HTTP_PORT = 8080

var app = express()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Main page')
}
)

app.listen(HTTP_PORT)
