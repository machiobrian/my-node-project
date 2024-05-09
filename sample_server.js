// enrty to app & server logic

// -------------- HTTP SERVER
const http = require('http');
// create an http server - createServer method
const server = http.createServer((req, res) => {
    // set the response headers
    res.writeHead(200, {'Content-Type' : 'text/html'})
    // writ ethe response content
    res.write('<h2>Helloo, Node.js Http Server!</h2>')
    res.end()
})

// specify the port to listen on 
const port_http = 3001

// start the server
server.listen(port_http, () => {
    console.log(`Node.js Http Server running on port ${port_http}`)
})

// ------------ EXPRESS.JS SERVER
const express = require('express')
const app = express() // creates an express application

// define routes and route handlers
app.get('/', (req, res) => {
    res.send('<h3> Hellooo, from Express.js (app) Server</h3>')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
})